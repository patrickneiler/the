#!/bin/bash

# Entity Feature Generator
# Constructs a full feature for any given entity model.

# Entity Name
ENTITY=event

# Build project shell library with routing to standardized Entity page layout
nx generate @nrwl/angular:library feature/${ENTITY}s/shell --lazy --routing --skipPackageJson --tags=feature --unitTestRunner=none

# Build Entity API library with and import into Entity shell
nx generate @nrwl/angular:library feature/${ENTITY}s/api --skipPackageJson --tags=api --unitTestRunner=none --parentModule=libs/feature/$ENTITY/shell/src/lib/$ENTITY-feature-shell.module.ts

# Build API data store with full CRUD functionality and Firebase Firestore data persistence
nx workspace-generator store ${ENTITY} --projectName=feature-${ENTITY}s-api

# Build route resolver to inject API facade into active route data
nx workspace-generator entity ${ENTITY} --projectName=feature-${ENTITY}s-shell