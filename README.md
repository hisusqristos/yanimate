# pretend to Animate with Yanimate! 

Nothing is pretty much done yet, but i desire to finish building this one day...

## Usage

## Animate(arrayOfFrames, secondsLong, OptionalCallback)

arrayOfFrames is, as we uderstand, the array of frames. (of type string)

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

`secondsLong` is a number, which means how long your array of frames is going to be animated. like 10. or 32. idfc, pass anything.

hope it's clear enough. will add an example file later, bye =))