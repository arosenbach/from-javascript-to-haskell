#!/bin/bash

# Usage: source this file `source ./script.sh`.
# You can then execute `n` or `p` to move forward or backward in the commits list.
# Each time, the next commit will be displayed.

target=solution-ramda
showNextDiff(){
	targetCommit=$1
	if [ $# -eq 0 ]; then
    	targetCommit=$target
	fi
	next=$(git rev-list --topo-order HEAD..$targetCommit |  tail -1)
	git --no-pager log --format=%B -n 1 $next
	git --no-pager diff ..$next;
}
n(){  
	git checkout -f $(git rev-list --topo-order HEAD..$target |  tail -1);
	clear
	showNextDiff $target;
}
p(){
	git checkout -f HEAD^
	clear
	showNextDiff $target
}