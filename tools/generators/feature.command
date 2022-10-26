#!/bin/bash

# Variables
FEATURE=artists
APP=tourbo

# Domain Shell
nx generate @nrwl/angular:library feature/$FEATURE/shell --lazy --routing --skipPackageJson --tags=feature

# Domain Shell Outlet Component
component/shell --project=feature-$FEATURE-shell --module=feature-$FEATURE-shell.module.ts --style=scss --displayBlock --export --path=libs/feature/$FEATURE/shell/src/lib

# Domain API
feature/$FEATURE/api --parentModule=libs/feature/$FEATURE/shell/src/lib/feature-$FEATURE-shell.module.ts --skipPackageJson --tags=api

nx generate @schematics/angular:module