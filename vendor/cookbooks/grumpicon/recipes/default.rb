include_recipe "apt"
include_recipe "build-essential"
include_recipe "runit"
include_recipe "vim"
include_recipe "nodejs::install_from_package"

package "git"
package "curl"

execute "apt-get install -y upstart"

cookbook_file "/etc/init/grumpicon.conf" do
	mode "755"
  source "grumpicon.conf"
end

