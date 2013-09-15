# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.provider :virtualbox do |vb, override|
    override.vm.box = "precise64"
    override.vm.box_url = "http://files.vagrantup.com/precise64.box"

    override.vm.network :private_network, ip: "33.33.33.10"
    config.vm.network :forwarded_port, host: 4567, guest: 80

    # ensure that chef is up to date so that certain features of the recipes will work
    override.vm.provision :shell, :path => "bin/update_chef.sh"
    override.vm.provision :chef_solo do |chef|
      chef.cookbooks_path = "vendor/cookbooks"
      chef.add_recipe "grumpicon"

      # has to be overriden at the config level so that the attributes
      # in a recipe that depend on the version behave properly
      # NOTE we need to find a way to pin the minor version of the library
      #chef.json = {
      #  'tomcat' => { 'base_version' => 7 },
      #}
    end
  end
end
