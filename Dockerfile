# Start with a Python base image
FROM python:3.9-buster

# Set a working directory
WORKDIR /app

# Install necessary dependencies and IPFS
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://dist.ipfs.io/go-ipfs/v0.9.1/go-ipfs_v0.9.1_linux-arm64.tar.gz && \
    tar xvfz go-ipfs_v0.9.1_linux-arm64.tar.gz && \
    mv go-ipfs/ipfs /usr/local/bin/ipfs && \
    rm -rf go-ipfs_v0.9.1_linux-arm64.tar.gz go-ipfs


# Copy your application code into the container
COPY . /app/

# Install Python dependencies
RUN pip install --no-cache-dir --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Initialize IPFS
RUN ipfs init

# Change the ownership of the IPFS data directory
USER root
RUN mkdir -p /data/ipfs && chown -R 1000:1000 /data/ipfs
USER 1000

# Expose the necessary ports for IPFS to operate
EXPOSE 4001 5001 8080

# Start the IPFS daemon by default when the container starts
CMD ["ipfs", "daemon"]

