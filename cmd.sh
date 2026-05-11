#!/bin/sh

# This file is a workaround to StackBlitz's janky ass terminal/bash implementation
# https://github.com/stackblitz/webcontainer-core/issues/1519

basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

echo "opts: $@"

node  "" "$@"