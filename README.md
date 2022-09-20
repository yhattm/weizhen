oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g weizhen
$ weizhen COMMAND
running command...
$ weizhen (--version)
weizhen/5.9.22 linux-x64 node-v17.6.0
$ weizhen --help [COMMAND]
USAGE
  $ weizhen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`weizhen gpio`](#weizhen-gpio)
* [`weizhen hello PERSON`](#weizhen-hello-person)
* [`weizhen hello world`](#weizhen-hello-world)
* [`weizhen help [COMMAND]`](#weizhen-help-command)
* [`weizhen iot [FILE]`](#weizhen-iot-file)
* [`weizhen plugins`](#weizhen-plugins)
* [`weizhen plugins:install PLUGIN...`](#weizhen-pluginsinstall-plugin)
* [`weizhen plugins:inspect PLUGIN...`](#weizhen-pluginsinspect-plugin)
* [`weizhen plugins:install PLUGIN...`](#weizhen-pluginsinstall-plugin-1)
* [`weizhen plugins:link PLUGIN`](#weizhen-pluginslink-plugin)
* [`weizhen plugins:uninstall PLUGIN...`](#weizhen-pluginsuninstall-plugin)
* [`weizhen plugins:uninstall PLUGIN...`](#weizhen-pluginsuninstall-plugin-1)
* [`weizhen plugins:uninstall PLUGIN...`](#weizhen-pluginsuninstall-plugin-2)
* [`weizhen plugins update`](#weizhen-plugins-update)

## `weizhen gpio`

set GPIO

```
USAGE
  $ weizhen gpio -p <value> -s <value>

FLAGS
  -p, --pin=<value>     (required) GPIO pin number
  -s, --status=<value>  (required) status is highlow/high/low

DESCRIPTION
  set GPIO

EXAMPLES
  $ weizhen gpio -s on
```

_See code: [dist/commands/gpio.ts](https://github.com/yhattm/weizhen/blob/v5.9.22/dist/commands/gpio.ts)_

## `weizhen hello PERSON`

Say hello

```
USAGE
  $ weizhen hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/yhattm/weizhen/blob/v5.9.22/dist/commands/hello/index.ts)_

## `weizhen hello world`

Say hello world

```
USAGE
  $ weizhen hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ weizhen hello world
  hello world! (./src/commands/hello/world.ts)
```

## `weizhen help [COMMAND]`

Display help for weizhen.

```
USAGE
  $ weizhen help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for weizhen.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `weizhen iot [FILE]`

describe the command here

```
USAGE
  $ weizhen iot [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ weizhen iot
```

_See code: [dist/commands/iot.ts](https://github.com/yhattm/weizhen/blob/v5.9.22/dist/commands/iot.ts)_

## `weizhen plugins`

List installed plugins.

```
USAGE
  $ weizhen plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ weizhen plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `weizhen plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ weizhen plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ weizhen plugins add

EXAMPLES
  $ weizhen plugins:install myplugin 

  $ weizhen plugins:install https://github.com/someuser/someplugin

  $ weizhen plugins:install someuser/someplugin
```

## `weizhen plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ weizhen plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ weizhen plugins:inspect myplugin
```

## `weizhen plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ weizhen plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ weizhen plugins add

EXAMPLES
  $ weizhen plugins:install myplugin 

  $ weizhen plugins:install https://github.com/someuser/someplugin

  $ weizhen plugins:install someuser/someplugin
```

## `weizhen plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ weizhen plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ weizhen plugins:link myplugin
```

## `weizhen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ weizhen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ weizhen plugins unlink
  $ weizhen plugins remove
```

## `weizhen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ weizhen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ weizhen plugins unlink
  $ weizhen plugins remove
```

## `weizhen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ weizhen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ weizhen plugins unlink
  $ weizhen plugins remove
```

## `weizhen plugins update`

Update installed plugins.

```
USAGE
  $ weizhen plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
