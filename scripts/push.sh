#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_git() {
  git add --all
  git commit -am "[ci skip] Travis build: $TRAVIS_BUILD_NUMBER"
}

push_git() {
  git remote add origin-pages https://${GH_TOKEN}@github.com/MVSE-outreach/resources.git > /dev/null 2>&1
  git push --quiet --set-upstream origin HEAD
}

setup_git
commit_git
push_git
