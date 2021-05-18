# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<-SCRIPT
  sudo apt-get update
  sudo apt-get install -y --no-install-recommends virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11
  sudo apt-get install -y --no-install-recommends htop silversearcher-ag ctop tig
  
  sudo snap install task --classic

  echo "cd /vagrant" >> /home/vagrant/.bashrc
  cd /vagrant

  USER=vagrant task prerequisites:docker

  # Reboot is required for Docker groups
  sudo systemctl reboot
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM:
    vb.memory = "8192"
  end
  config.vm.network "public_network"
  #
  # View the documentation for the provider you are using for more

  config.ssh.forward_agent = true

  config.vm.provision "shell", inline: $script
end
