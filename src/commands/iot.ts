import { Command, Flags } from '@oclif/core'
import { timer } from 'rxjs'
import { mqtt, gpio } from 'yhattmtslib'

export default class Iot extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log('Start')

    const cli = mqtt.connect('https://broker.hivemq.com');
    cli.subscribe('weizhen', (err: any) => {
      if (err) {
        console.log(err);
      }
    })
    cli.on('message', (topic: any, msg: { toString: () => any }) => {
      const cmd = msg.toString()
      console.log(topic, cmd);
      if (cmd === 'o') {
        console.log('open door')
        gpio.setHighToLow(14, 500)
      }
    });
    timer(0, 10000).subscribe(n => this.log('keep alive', n))
  }
}
