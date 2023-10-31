import ipfshttpclient
print(ipfshttpclient.__version__)

def upload_to_ipfs(file):
    client = ipfshttpclient.connect("/ip4/127.0.0.1/tcp/5001/http")
    return client.add_bytes(file.read())
