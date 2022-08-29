FROM ruby:3.1.1

RUN apt-get update -qq \
 && apt-get install -y nodejs postgresql-client npm \
 && rm -rf /var/lib/apt/lists/* \
 && npm install --global yarn

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
