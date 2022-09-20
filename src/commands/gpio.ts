import { Command, Flags } from '@oclif/core'
import { GPIO } from 'yhattmtslib'

export default class Gpio extends Command {
  static description = 'set GPIO'

  static examples = [
    '<%= config.bin %> <%= command.id %> -s on',
  ]

  static flags = {
    pin: Flags.integer({ char: 'p', description: 'GPIO pin number', required: true }),
    status: Flags.string({ char: 's', description: 'status is highlow/high/low', required: true }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Gpio)

    const { pin, status } = flags
    if (status === 'highlow') {
      this.log('Set GPIO to ON then OFF')
      GPIO.SetHighToLow(pin, 1000)
    }
    else if (status === 'high') {
      this.log('Set GPIO to high')
      GPIO.SetHigh(pin)
    } else if (status === 'low') {
      this.log('Set GPIO to low')
      GPIO.SetLow(pin)
    } else {
      this.log('status is wrong')
    }
  }
}
