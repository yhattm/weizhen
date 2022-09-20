import { Command, Flags } from '@oclif/core'
import { timer, interval } from 'rxjs';

export default class Iot extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Iot)

    const name = flags.name ?? 'world'
    this.log('Start')
    this.log(`hello ${name} from /workspaces/weizhen/src/commands/iot.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    timer(0, 5000).subscribe(n => this.log('keep alive', n));
  }
}
