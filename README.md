# pretend to Animate with Yanimate! 

Nothing is pretty much done yet, but i desire to finish building this one day... </br>
**[DONE]:** Still need to refactor. i dont like multiple for loops at once. May Lord forgive me for that miserable commit history.
## Usage

## animate(frames, fps, duration)
frames is, as we uderstand, the array of frames. (string[])

for example:
arrayOfFrames[0]= 

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠛⠛⠙⢶⡻⢿⡶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠒⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⣀⣀⣈⣙⣆⠙⢦⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠞⠁⠀⠀⠘⣦⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣠⠶⠋⢉⣉⠀⠀⠉⠁⠈⢳⡀⠙⢦⣀⣀⣀⣠⠤⣤⣤⣤⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⡾⣿⣟⣤⡶⠆⠀⠀⠀⠘⣆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠟⠁⢠⣾⠭⠀⠀⠀⠀⣠⡤⠤⣷⡀⠀⠀⢠⣴⣴⠚⠉⠀⠀⠀⠀⠀⠈⠉⠛⠛⠲⣤⣀⠀⣠⡴⠛⣩⠟⠩⠞⠉⢠⠏⠀⠀⠀⠀⠀⠀⢻⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡏⠀⣴⣋⣀⣀⢀⡠⠖⠉⠁⠀⠀⠀⣩⡀⣠⠟⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠉⠩⢡⣠⠞⠁⠀⠀⠀⠀⠉⠉⠉⢉⣷⠆⠀⠀⠀⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣯⡇⠐⠋⢱⠏⠴⣫⠄⠀⠀⠀⠀⣠⠞⢁⣼⡽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠉⡁⠀⠀⠀⠻⣄⢀⠀⠀⠀⠀⠀⢰⣾⡉⠀⠀⠀⠀⠀⢳
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢻⠀⣠⠞⠁⣠⠞⠁⠀⠀⡤⠀⡼⠃⢠⣾⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⡴⠁⠀⠀⠀⠀⠘⠯⢦⡀⠀⠀⠀⠈⠻⣽⠀⠀⠀⠀⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⣯⡾⠁⢀⡼⠁⠀⠀⠀⡜⠁⡸⠃⣠⠟⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠋⠀⢀⣾⠁⣰⠀⠀⠀⠀⠸⡆⠈⠿⢦⡀⠀⠀⢀⡹⡄⠀⠀⠀⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⢋⡄⢀⠟⢀⡞⠀⠀⣸⠁⠀⠃⢠⠋⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⢹⠀⢻⠀⠀⠀⠀⠀⣹⡀⠀⠈⢳⡀⢳⡀⣿⠃⠀⠀⠀⠀⡸
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠡⢏⣴⠏⢠⡎⠀⠀⣰⡇⠀⠀⢰⠇⠄⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⢸⠀⡾⠀⠀⠀⡀⠀⢡⣷⠀⠀⠀⠹⠌⠱⣯⠀⠀⠀⠀⠀⡇
⠀⠀⠀⠀⠀⠀⢀⡞⠁⣴⡵⢿⡏⠀⡾⠀⠀⣠⢻⡇⠀⢠⠏⠠⠀⢸⣀⣴⣤⠀⠀⠀⠀⠀⠀⠀⣄⣤⣾⠋⠀⠀⠸⡄⣿⡆⠀⠀⢻⠀⠘⣟⡇⠀⠀⠀⠀⠀⢨⣷⠀⠀⠀⠀⠑
⠀⠀⠀⠀⢀⣴⢋⢀⣼⠟⠀⡼⠁⣸⠃⠀⣰⠃⢸⡇⢰⡟⢀⣀⣤⢶⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠉⠉⠓⢦⣄⣧⣿⣧⠀⠀⠘⡇⠀⢹⣷⠀⠀⠀⠀⠀⠀⢷⢧⡀⠀⠀⡀
⠀⠀⠀⢀⣾⣿⢋⣼⠏⠀⢸⠇⠀⡟⠀⢰⠇⠒⣸⣧⢾⠗⠛⠉⠁⠀⢳⡀⠀⠀⠀⠀⠀⠀⢸⢃⡟⠀⠀⠀⠀⠀⠈⢿⣼⢸⡆⠀⠀⢻⠀⠸⣿⡇⠀⠀⠀⠀⠀⠸⡎⢣⠀⠀⠁
⠀⠀⣰⣿⡾⠀⣼⡇⠀⠀⡞⢀⣾⠃⢠⡏⠐⠋⠀⠙⠾⢦⠀⠤⠤⠤⣌⣧⡀⠀⠀⠀⠀⢠⣾⣾⠀⠀⠀⣀⣀⡀⠀⠘⣯⡇⢿⣄⠀⢸⡆⠀⡏⡇⠀⠀⠀⠀⠀⠀⡇⠀⠀⠁⠀
⠀⣴⣽⡿⠁⣸⢹⠀⠀⠀⣿⡼⠉⡇⡸⠁⠀⠀⠀⠀⠀⠀⠀⣀⠀⣀⣀⡘⣷⣄⠀⠀⠀⡞⣷⡏⠀⠀⠊⠉⠈⠉⠁⠀⢻⣧⠈⣧⠀⢸⡇⠀⢹⡇⠀⠀⠀⠀⠀⠀⠇⠀⠀⠈⠀
⣼⡿⣽⠃⠀⠻⣼⠀⠀⠀⢿⡇⢠⢷⡇⠀⠀⢀⣤⣤⣀⣤⣤⣤⡤⢤⣄⡀⠈⠉⠣⣄⣰⡇⣿⠁⠀⠒⠒⠤⣤⣀⡀⠀⠀⢻⡆⠘⣆⠈⡇⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡟⣰⡟⠀⠀⢀⡏⠀⠀⠀⠈⠑⡼⣀⣙⣶⣶⣿⣛⡉⣉⣉⢉⠉⣙⡿⠟⠀⠀⠀⠀⠀⠉⢉⡩⠄⠀⣤⣶⡶⠿⣶⣾⣽⣄⡀⢳⡀⢹⢰⡇⠀⢸⠇⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⡄
⢠⡟⠀⠀⠀⣼⠀⠀⠀⠀⠀⢠⡇⢿⣿⡋⠹⣅⠀⡙⢛⠛⣁⠤⢞⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣌⠓⢦⡀⠀⠀⣙⣻⣷⣿⣾⡟⢸⠀⡜⠀⠀⣠⠃⠀⠀⠀⡆⠀⠀⠀⠃
⡸⠀⠀⠀⢀⡏⠀⠀⠀⢀⠇⣸⡇⠀⠈⢻⠺⣻⠷⠟⠉⠉⢉⣩⠟⣉⡀⢀⣀⠄⡀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠒⠿⢯⣁⡀⣘⡷⠟⠻⣧⣼⡀⠀⠀⢀⡟⠀⠀⠀⢀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⠁⠀⠀⠀⣾⢀⣿⠃⠀⠀⠀⠉⢁⣄⣤⠤⠒⠟⠒⠉⠉⠁⠀⠀⠉⠀⠀⠀⠀⠈⠀⠂⠀⠀⠀⠀⠀⠀⠈⠧⣭⡄⠐⠚⠛⢫⠇⠀⢀⡼⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡾⠀⠀⠀⣸⠃⣸⣿⠂⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⡼⠁⠀⠀⠀⢠⡇⠀⠀⠀⠀⠃
⠀⠀⠀⢰⡇⠀⠀⠀⣿⢠⡟⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⡼⠁⠀⠀⠀⢀⣾⣄⠀⠀⠀⠀⠀
⠀⠀⠀⣿⠇⠀⠀⠀⣧⣿⢳⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠛⠛⠓⠢⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⡾⠁⠀⠀⡀⠀⣼⢞⣯⡆⠀⠀⠀⠀
⠀⠀⣸⣹⠀⠀⠀⢸⣿⣯⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠏⠀⣷⣶⣶⣶⣶⣤⣉⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠃⢀⡾⠀⠀⠀⣰⠀⢰⠇⠈⠛⡇⠀⠀⠀⠀
⠀⢀⣿⡟⠀⠀⢀⢸⣿⣯⣧⣧⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠈⣿⣤⣀⣹⣿⣿⣿⣿⣿⣿⣷⣯⣱⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⣰⠏⠀⠀⠀⣰⠃⢀⡿⠊⠁⢠⠇⠀⢀⠀⠀
⠀⣸⡟⡇⡄⠀⣾⢻⡻⣿⡇⡹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⢀⡾⠁⣠⣶⠀⡰⠃⠀⠞⠀⣠⣿⠏⠀⠀⡞⠀⠀
⠀⣿⠀⡇⣿⠀⠙⣾⣧⣿⡇⠀⠹⣄⠀⠀⠀⣀⡴⠖⠦⣄⠀⢸⣿⣿⡿⠛⠛⠛⠛⠛⠛⢿⡏⠀⠀⠀⠀⠀⠀⠀⢠⡾⠁⠰⠋⠠⢞⣽⣙⣛⠃⠀⡴⠒⢉⡽⠋⠀⠀⡼⠁⠀⠀
⠀⡏⠀⢹⢻⡀⠀⡞⡟⠻⡇⠀⠀⢿⣄⠀⢸⡁⠀⠀⠀⣸⠀⠘⣿⠏⠀⠀⠀⠀⠀⠀⣠⠟⠁⠀⠀⠀⠀⠀⢀⡴⠋⣴⠀⠀⠀⠀⠉⢈⣨⠛⣠⣼⣁⡴⠋⠀⠀⣀⣰⠃⠀⠀⠀
⠀⡇⠀⠘⣿⣷⠶⢸⡆⠀⢿⠀⣠⣿⣿⣧⡀⠙⢦⣀⡤⠏⠀⠀⠉⠽⣒⣲⣶⣖⡨⠟⠛⠀⠀⠀⠀⠀⢀⣴⠋⢀⡾⠁⠀⠀⠀⠀⢠⣨⠏⠃⣾⡿⢋⠀⠀⠀⡴⢹⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠙⣿⡗⠚⡇⠀⢹⠓⠿⠋⠋⠙⠿⣄⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠹⡄⡀⠀⠀⠀⠀⠀⢀⡴⠋⢀⣴⡿⣿⣀⣠⣤⡤⠀⡿⠃⠀⣾⠏⢠⠞⠀⠀⡼⢡⡏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠹⣿⠁⢧⢀⣿⡿⠄⠀⠀⠀⠀⠈⢷⣄⠀⠒⠀⠀⠀⠀⠀⠀⠀⣧⡇⠀⠀⠀⣀⠴⠋⣀⠴⠋⣼⠳⠃⠉⢲⠊⠁⠀⠀⢀⡼⣿⣾⠏⠀⠀⡼⣡⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢻⣣⣼⡍⠉⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠰⡇⢀⣤⢞⣡⠴⠚⠁⣀⣤⣧⠁⡠⢤⣬⡄⠀⠀⢀⡼⣹⣿⠃⠀⢀⡴⣵⢫⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢳⡿⣷⡀⠀⠀⠠⠄⢠⣴⣿⣿⣿⣿⣷⡀⠠⣄⡀⡀⠀⠀⠙⠛⣛⣛⣭⢤⣒⠛⡋⢁⠀⠀⠀⠀⢠⢀⣁⠀⣀⡞⢠⣿⠃⠀⢞⣾⣾⠇⢸⣇⠀⠀⠀⠀⠀⠀
                  
                 OR ANYTHING ELSE, GUYS....

And the other frames should be like the first one, but a little modified, so it can kinda move and look like an animation.

`fps` means frames per second. the thing i forked didn't have it, so i added))</br >
`duration` is how long you want you animation to be played (in seconds). it's optional, default value is 1.

hope it's clear enough. will add an example file later, bye =))
