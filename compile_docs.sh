#!/bin/bash

rm -rf documentation
mkdocs build
mv site documentation
gulp
