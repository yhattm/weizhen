import { Command } from '@oclif/core'
import { mqtt } from 'yhattmtslib'

export default class Open extends Command {
  static description = 'open cmd'

  static examples = [
    `<%= config.bin %> <%= command.id %>`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    const cli = mqtt.connect('https://broker.hivemq.com');
    const res = new Promise(resolve => {
      cli.on('connect', () => {
        cli.publish('weizhen', 'open');
        resolve('publish');
      });
    });
    await res;
    cli.end();
  }
}
