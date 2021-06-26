import platform,json,psutil,logging

def getSystemInfo():
    try:
        info={}
        info['platform']=platform.system()
        info['platform_release']=platform.release()
        info['platform_version']=platform.version()
        info['architecture']=platform.machine()
        info['processor']=platform.processor()
        info['ram']=str(round(psutil.virtual_memory().total / (1024.0 **3)))+" GB"
        return json.dumps(info)
    except Exception as e:
        logging.exception(e)

with open('sysinfo.json', 'w') as f:
    json.dump(json.loads(getSystemInfo()), f)
# print(json.loads(getSystemInfo()))
