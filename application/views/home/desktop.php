<div id='wholeThing' class=wholeThing>
	<div class='screenSpace'>
		<div class='winamp'>
			<div class='header'>
				<div class='header-left'></div>
				&nbsp;DIALAMP&nbsp;
				<div class='header-right'></div>
				&nbsp;<span id='closeWinamp' style='font-size: 20px'>&#215;</span>
			</div>
			<div class='player'>
				<div class='top-whole'>
					<div class='top-left'>
						<div class='vis'>00:00</div>
					</div>
					<div class='top-right'>
						<div class='top-right-top'>
							<div class='vis title'>now playing</div>
						</div>
						<div class='top-right-mid'>
							<div class='inf'>128</div>
								kbps&nbsp;
							<div class='inf'>44</div>
								kHz
							<div class='mono_stereo'>mono</div>
						</div>
						<div class='top-right-bottom'>
							<div class='bar volume'></div>
							<div class='bar blanced'></div>
							<div class="btn ext left">EQ</div>
							<div class="btn ext">PL</div>
						</div>
					</div>
				</div>
				<div class='sidebar'>
					<div class='playbar'>&nbsp;</div>
				</div>
				<div class='btn-row'>
					<div class='btn player_b first'><i class='fa fa-step-backward'></i></div>
					<div class='btn player_b' id='playBtn'><i class="fa fa-play"></i></div>
					<div class='btn player_b' id='pauseBtn'><i class='fa fa-pause'></i></div>
					<div class='btn player_b' id='stopBtn'><i class='fa fa-stop'></i></div>
					<div class='btn player_b'><i class='fa fa-step-forward'></i></div>
					
					<div class='btn player_b first'><i class='fa fa-eject'></i></div>
					
					<div class='btn shuffle left'>SHUFFLE</div><div class='btn ext'>R</div>
				</div>
			</div>
		</div>
		<div class='desktopFolders'>
			<div id='myPictures' class='desktopFolder'>
				<div class='folderIcon'>
					<img src='<?php echo IMG ?>directory_closed.ico' width='50px' height='50px'>
				</div>
				<div id='myPicturesTitle' class='folderTitle'>
					My Pictures
				</div>
			</div>

			<div id='myMusic' class='desktopFolder'>
				<div class='folderIcon'>
					<img src='<?php echo IMG ?>directory_closed.ico' width='50px' height='50px'>
				</div>
				<div class='folderTitle'>
					My Music
				</div>
			</div>

			<div id='myComputer' class='desktopFolder'>
				<div class='folderIcon'>
					<img src='<?php echo IMG ?>computer_explorer.ico' width='50px' height='50px'>
				</div>
				<div class='folderTitle'>
					My Computer
				</div>
			</div>

			<div id='recycleBin' class='desktopFolder'>
				<div class='folderIcon'>
					<img id='recycleBinImage' src='<?php echo IMG ?>recycle_bin_empty.ico' width='50px' height='50px'>
				</div>
				<div class='folderTitle'>
					Recycle Bin
				</div>
			</div>

		</div>

		<div class='explorerWindow'>
			<div class='explorerTopBar'>
				<img src='<?php echo IMG ?>directory_closed.ico' width='25px' height='25px'>
				&nbsp;&nbsp;
				<div class='explorerTopBarText'>
				</div>
				<div id='closeExplorer' class='cancelButton'>&#215;
				</div>
			</div>
			File&nbsp;Edit&nbsp;
			<div class='explorerContent'>
				<?php
					foreach (['lovefool','alright','you_outta_know','loser','sub_sub_groove'] as $song) {
						?>
							<div class='audioWhole' id='<?php echo $song ?>'>
								<div>
									<img class='audioFile' src='<?php echo IMG ?>audio_file.ico' width='50px' height='50px'>
								</div>
								<div class='audioTitle'><?php echo $song ?>.php</div>
							</div>
						<?php
					}
				?>
			</div>
		</div>


		<div class='startMenu'>
			<div class='startMenuSide'>
			</div>
			<div class='startMenuList'>
				<dl>
					<li>
						<div class='listItem'>
							<div class='listItemText'>
								<u>P</u>rograms
							</div>
							<div class='listItemArrow'>
								&#9654;
							</div>
						</div>
					</li>
					<li>
						<div class='listItem'>
							<div class='listItemText'>
								<u>D</u>ocuments
							</div>
							<div class='listItemArrow'>
								&#9654;
							</div>
						</div>
					</li>
					<li><u>A</u>bout Us</li>
					<li><u>H</u>elp</li>
					<li><u>R</u>un</li>
				</dl>
				<hr />
				<dl>
					<li>Sh<u>u</u>t Down...</li>
				</dl>
			</div>
		</div>
	</div>
	<div class='taskBar'>
		<div class='startButton'>
			Start
		</div>
	</div>

</div>