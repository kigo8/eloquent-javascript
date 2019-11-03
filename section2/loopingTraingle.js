/* 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let count = 0;
const maxCount = 6;
let hashTags = '';

while (count <= maxCount) {
  hashTags += "#";

  console.log(hashTags);

  count++;
}