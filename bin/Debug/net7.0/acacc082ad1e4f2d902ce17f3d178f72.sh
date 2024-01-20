function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 35444;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 35444 > /dev/null;
done;

for child in $(list_child_processes 35458);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/gilbertyang/Desktop/personalwebsite/personalwebsite/bin/Debug/net7.0/acacc082ad1e4f2d902ce17f3d178f72.sh;
