gem list chef | grep 11.6.0

if [ $? -eq 1 ]; then
  echo "Updating chef to 11.6.0..."
  gem install chef --version='=11.6.0' --no-ri --no-rdoc
fi
