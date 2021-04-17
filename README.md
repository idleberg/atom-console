# console

> Service provider for read-only console panels

[![apm](https://flat.badgen.net/apm/license/console)](https://atom.io/packages/console)
[![apm](https://flat.badgen.net/apm/v/console)](https://atom.io/packages/console)
[![apm](https://flat.badgen.net/apm/dl/console)](https://atom.io/packages/console)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-console)](https://circleci.com/gh/idleberg/atom-console)
[![David](https://flat.badgen.net/david/dep/idleberg/atom-console)](https://david-dm.org/idleberg/atom-console)

This package is a fork of `console-panel`, with a few key-differences:

- uses Svelte for UI
- deferred package activation
- shows timestamp
- filter by message type

**Note:** This package is fully API-compatible to `console-panel`, so you can use it as a drop-in replacement

## Installation

### apm

Install `console` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install console`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `console`:

```bash
$ git clone https://github.com/idleberg/atom-console console
```

Inside the cloned directory, install dependencies using your preferred Node package manager:

```bash
$ yarn || npm install
```

## Usage

This package provides the service to that can be used by other packages. To consume it, add the following to your `package.json`:

```json
{
  "consumedServices": {
    "console-panel": {
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
