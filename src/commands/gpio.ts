import {Command, Flags} from '@oclif/core'
import {GPIO} from 'yhattmtslib'

export default class Gpio extends Command {
  static description = 'set GPIO'

  static examples = [
    '<%= config.bin %> <%= command.id %> -s on',
  ]

  static flags = {
    pin: Flags.integer({char: 'p', description: 'GPIO pin number', required: true}),
    status: Flags.string({char: 's', description: 'status is highlow/high/low', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Gpio)

    const {pin, status} = flags
    switch (status) {
    case 'highlow': {
      this.log('Set GPIO to ON then OFF')
      GPIO.setHighToLow(pin, 1000)

      break
    }

    case 'high': {
      this.log('Set GPIO to high')
      GPIO.setHigh(pin)

      break
    }

    case 'low': {
      this.log('Set GPIO to low')
      GPIO.setLow(pin)

      break
    }

    default: {
      this.log('status is wrong')
    }
    }
  }
}
