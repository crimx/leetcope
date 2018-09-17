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
  git push https://${GH_TOKEN}@github.com/crimx/leetcope.git HEAD:master
}

setup_git
commit_git
push_git
