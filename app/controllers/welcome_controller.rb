class WelcomeController < ApplicationController
  def index
      if current_user
             redirect_to faqs_path
      end
      @faqs = Faq.all
  end
end
