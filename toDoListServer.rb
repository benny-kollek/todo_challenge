require 'sinatra/base'

class ToDoListServer < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  get '/' do
    redirect './index.html'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
