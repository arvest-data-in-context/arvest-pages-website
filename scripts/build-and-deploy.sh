#!/bin/bash

# Define the branches
MAIN_BRANCH="main"
TARGET_BRANCH="branch-2"
BUILD_FOLDER="build"

# Ensure you are in the git repository
if [ ! -d ".git" ]; then
  echo "This script must be run from the root of a git repository."
  exit 1
fi

# Switch to the main branch and pull the latest changes
git checkout $MAIN_BRANCH
if [ $? -ne 0 ]; then
  echo "Failed to switch to branch $MAIN_BRANCH."
  exit 1
fi

git pull origin $MAIN_BRANCH
if [ $? -ne 0 ]; then
  echo "Failed to pull the latest changes from $MAIN_BRANCH."
  exit 1
fi

# Copy the build folder to a temporary location
TEMP_DIR=$(mktemp -d)
cp -r $BUILD_FOLDER/* $TEMP_DIR
if [ $? -ne 0 ]; then
  echo "Failed to copy the build folder."
  exit 1
fi

# Switch to branch-2 and pull the latest changes
git checkout $TARGET_BRANCH
if [ $? -ne 0 ]; then
  echo "Failed to switch to branch $TARGET_BRANCH."
  exit 1
fi

git pull origin $TARGET_BRANCH
if [ $? -ne 0 ]; then
  echo "Failed to pull the latest changes from $TARGET_BRANCH."
  exit 1
fi

# Copy the build contents from the temporary directory to the current branch
cp -r $TEMP_DIR/* $BUILD_FOLDER
if [ $? -ne 0 ]; then
  echo "Failed to copy the contents to the $TARGET_BRANCH branch."
  exit 1
fi

# Add, commit, and push the changes
git add $BUILD_FOLDER
git commit -m "Update build folder from $MAIN_BRANCH"
if [ $? -ne 0 ]; then
  echo "Failed to commit the changes."
  exit 1
fi

git push origin $TARGET_BRANCH
if [ $? -ne 0 ]; then
  echo "Failed to push the changes to $TARGET_BRANCH."
  exit 1
fi

# Clean up
rm -rf $TEMP_DIR

# Switch back to the main branch
git checkout $MAIN_BRANCH
if [ $? -ne 0 ]; then
  echo "Failed to switch back to $MAIN_BRANCH."
  exit 1
fi

echo "Build folder successfully copied from $MAIN_BRANCH to $TARGET_BRANCH, pushed, and switched back to $MAIN_BRANCH."
