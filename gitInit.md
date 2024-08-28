create repo in github 
then 
in terminal run this command
git init
then run this command
git add .
git commit -m "my message"
git branch -M develop
git remote add origin https://github.com/{urUserName}/{repoName}.git
git push -u origin develop

another way
git clone https://github.com/aosama314/Demos-Repo.git
git add .
git commit -m "my message"
git branch -M develop
git remote add origin https://github.com/{urUserName}/{repoName}.git
git push -u origin develop
