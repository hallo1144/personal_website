ERROR_MSG=`/usr/bin/mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USERNAME --password=$MYSQL_PASSWORD -e "show databases;" 2>/dev/null`

#
# Check the output. If it is not empty then everything is fine and we return
# something. Else, we just do not return anything.
#
while [[ "$ERROR_MSG" == "" ]]
do
    sleep 1
    ERROR_MSG=`/usr/bin/mysql --host=$MYSQL_HOST --port=$MYSQL_PORT --user=$MYSQL_USERNAME --password=$MYSQL_PASSWORD -e "show databases;" 2>/dev/null`
    echo "not yet."
done

echo "done"

npm run dev