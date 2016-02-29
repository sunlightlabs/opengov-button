# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "bento/ubuntu-14.04"

  config.vm.define "project" do |project|
    project.vm.network "private_network", ip: "10.73.98.100"
    project.vm.synced_folder "./", "/projects/opengov-button/src/opengov-button", owner: 1010, group: 1010
    project.vm.provider "virtualbox" do |vb|
      vb.name = "project.opengov-button"
    end

    project.vm.provision "ansible" do |ansible|
      ansible.playbook = "provisioning/project.yml"
      ansible.inventory_path = "provisioning/hosts.vagrant"
      ansible.limit = "all"
      ansible.extra_vars = { deploy_type: "vagrant" }
      ansible.raw_arguments = ["-T 90", '-v']
    end

    # Restart uwsgi after synced_folder happens
    project.vm.provision :shell, :inline => "sudo service uwsgi restart", run: "always"
  end

end