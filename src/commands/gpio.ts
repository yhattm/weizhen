import { Command, Flags } from '@oclif/core'
import { gpio } from 'yhattmtslib'

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
    const { flags } = await this.parse(Gpio)

    const { pin, status } = flags
    switch (status) {
      case 'highlow': {
        this.log('Set GPIO to ON then OFF')
        gpio.setHighToLow(pin, 1000)

        break
      }

      case 'high': {
        this.log('Set GPIO to high')
        gpio.setHigh(pin)

        break
      }

      case 'low': {
        this.log('Set GPIO to low')
        gpio.setLow(pin)

        break
      }

      default: {
        this.log('status is wrong')
      }
    }
  }
}
