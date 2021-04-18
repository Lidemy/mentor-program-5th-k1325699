#!/bin/bash
curl https://api.github.com/users/$1 > temp.txt
cat temp.txt | grep -n '"name"' | awk 'BEGIN {FS=":"} {print $3}' |sed 's/"//1' |sed 's/",//1'
cat temp.txt | grep -n bio | awk 'BEGIN {FS=":"} {print $3}' |sed 's/"//1' |sed 's/",//1'
cat temp.txt | grep -n location | awk 'BEGIN {FS=":"} {print $3}' |sed 's/"//1' |sed 's/",//1'
cat temp.txt | grep -n blog | awk 'BEGIN {FS=":"} {print $3}' |sed 's/"//1' |sed 's/",//1'



