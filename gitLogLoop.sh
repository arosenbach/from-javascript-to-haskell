#!/bin/bash

# Usage: this script is executable. Simply run `./gitLogLoo.sh`.
# The git tree will be displayed and refreshed every seconds.
# Press ctrl-c do quit.

while :;                                       
  do
  clear
  date
  git --no-pager log --oneline --decorate --graph --all
  sleep 1
done