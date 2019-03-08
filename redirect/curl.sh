# Check if js files is max-age 0 by my original server
# curl -sSL -D - https://wasedatime.com/static/media/logo.ff714327.png \
#   --resolve wasetime.com:443:159.89.210.122 -o /dev/null --insecure
# It is indeed. Received Cache-Control: public, max-age=0 from nginx

# curl -sSL -D - https://staging.wasetime.com/api/static/2018-2019/course_list_CJL.json \
#   --resolve staging.wasetime.com:443:139.59.216.161 -o /dev/null --insecure
# Files from /api/static do not have Cache-Control set.

curl -sSL -D - https://staging.wasetime.com\
  --resolve staging.wasetime.com:443:139.59.216.161 -o /dev/null --insecure
