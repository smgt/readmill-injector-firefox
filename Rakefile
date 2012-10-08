require 'json'

task :update_readmill do
  files = %w{https://platform.readmill.com/send.js https://platform.readmill.com/assets/platform/btn_ph_str_large.png https://platform.readmill.com/assets/platform/btn_ph_str_small.png}
  files.each do |file|
    `curl -s #{file} > data/#{File.basename(file)}`
    puts "Fetching #{File.basename(file)}"
  end
end

namespace :run do

  desc "Test plugin on gutenberg.org"
  task :gutenberg do
    `cfx run --binary-args '-url "http://gutenberg.org/ebooks/40040" -jsconsole' -p '~/Library/Application Support/Firefox/Profiles/extension-development/'`
  end

  desc "Test plugin on feedbooks.com"
  task :feedbooks do
    `cfx run --binary-args '-url "http://www.feedbooks.com/books/top?range=month"  -jsconsole' -p '~/Library/Application Support/Firefox/Profiles/extension-development/'`
  end

end
