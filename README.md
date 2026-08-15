# console

> Service provider for read-only console panels

[![License](https://img.shields.io/github/license/idleberg/atom-console?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-console/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-console?style=for-the-badge)](https://github.com/idleberg/atom-console/releases)
[![Downloads](https://img.shields.io/pulsar/dt/console?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/console)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-console/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-console/actions)

This package is a fork of `console-panel`, with a few key-differences:

- uses Svelte for UI
- deferred package activation
- shows timestamp
- filter by message type

**Note:** This package is fully API-compatible to `console-panel`, so you can use it as a drop-in replacement

![Screenshot](https://raw.github.com/idleberg/atom-console/master/screenshot.png)

## Installation

### ppm

Install `console` from Pulsar's [Package Manager](https://docs.pulsar-edit.dev/using-pulsar/packages/#command-line) or the command-line equivalent:

`$ ppm install console`

### Using Git

Change to your Pulsar packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.pulsar\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.pulsar\packages
```

**Linux & macOS**

```bash
$ cd ~/.pulsar/packages/
```

Clone repository as `console`:

```bash
$ git clone https://github.com/idleberg/atom-console console
```

Inside the cloned directory, install dependencies using your preferred Node package manager:

```bash
$ apm install || npm install
```

## Usage

This package provides the service to that can be used by other packages. To consume it, add the following to your `package.json`:

```json
{
  "consumedServices": {
    "console": {
      "versions": {
        "1.0.0": "consumeConsole"
      }
    }
  }
}
```

Next up, you can consume the service in your package:

```js
consumeConsole(consolePanel) {
  this.consolePanel = consolePanel;

  return new Disposable(() => {
    this.consolePanel = null;
  });
}
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
