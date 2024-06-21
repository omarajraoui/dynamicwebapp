#!/bin/bash
/usr/bin/openresty -g "daemon off;"


#Commented this is used to keep the pod running after the NGinx crashes
#used only for troubleshooting if the pods crashes upong start
#while true; do
#    echo "Sleeping for 10 seconds..."
#    sleep 10
#done
