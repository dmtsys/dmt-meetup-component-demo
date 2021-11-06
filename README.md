# dmt-meetup-component-demo

```bash
cd ~/Projects # or some other directory

git clone https://github.com/dmtsys/dmt-meetup-component-demo.git
cd dmt-meetup-component-demo/svelte

npm install

npm run build
```

Create similar `~/.dmt/user/devices/this/scripts/prepare_engine` file:

```bash
#!/bin/bash

source ~/.dmt/etc/.bash_aliases_bundle # dirsync

DMT_PACKAGES="$HOME/Projects/dmt-system/packages"
DMT_APPS="$HOME/.dmt/apps"
DMT_USER_APPS="$HOME/.dmt/user/apps"

# ...

# dmt-meetup-component-demo

mkdir -p "$DMT_USER_APPS/dmt-meetup-component-demo/public"; cd $_
SOURCE="$DMT_PACKAGES/dmt-meetup-component-demo/svelte/dist"
dirsync "$SOURCE" .

mkdir -p "$DMT_USER_APPS/dmt-meetup-component-demo/backend"; cd $_
SOURCE="$DMT_PACKAGES/dmt-meetup-component-demo/dmt-hook"
dirsync "$SOURCE" .

```

Please have (latest version) [DMT ENGINE](https://github.com/uniqpath/dmt) installed.

Restart dmt proc and visit `http://localhost:7777/dmt-meetup-component-demo/`
