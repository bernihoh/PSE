

/**
 * Class SoundHandler
 * The Sound Handler that manages the different Sounds the Program can
 * make.

Including the Error and finish Sound.
 */
public class SoundHandler {

  //
  // Fields
  //

  /**
   * The List of all paths to the Audio-Files.
   */
  private u7qkS15Xb7BMH soundList;
  /**
   * The MediaPlayer that plays the given Music.
   */
  private uCrEnQqDIUZVj player;
  
  //
  // Constructors
  //
  public SoundHandler () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of soundList
   * The List of all paths to the Audio-Files.
   * @param newVar the new value of soundList
   */
  private void setSoundList (u7qkS15Xb7BMH newVar) {
    soundList = newVar;
  }

  /**
   * Get the value of soundList
   * The List of all paths to the Audio-Files.
   * @return the value of soundList
   */
  private u7qkS15Xb7BMH getSoundList () {
    return soundList;
  }

  /**
   * Set the value of player
   * The MediaPlayer that plays the given Music.
   * @param newVar the new value of player
   */
  private void setPlayer (uCrEnQqDIUZVj newVar) {
    player = newVar;
  }

  /**
   * Get the value of player
   * The MediaPlayer that plays the given Music.
   * @return the value of player
   */
  private uCrEnQqDIUZVj getPlayer () {
    return player;
  }

  //
  // Other methods
  //

  /**
   * The Constructor of this Class.
Has no parameters so it only sets the List to an
   * Empty List so that the User can add File-paths to the playable Sounds later.
   */
  public void SoundHander()
  {
  }


  /**
   * The Constructor of this Class.
The List of Strings should contain path to the
   * Sound-Files the Player should play.
The given List will be set at the soundList
   * of this Class.
   * @param        sounds The Path-List that the SoundHandler should use as
   * soundList.
   */
  public void SoundHandler(u7qkS15Xb7BMH sounds)
  {
  }


  /**
   * Add a new Sound-Filepath to the soundList.
   * @param        filepath The Filepath that should be added.
   */
  public void addSound(uRubgLa75CQhI filepath)
  {
  }


  /**
   * Starts the MediaPlayer with a random Sound of the given List.

Therefore it
   * calls the playSound(listPosition)-Method with an randomly choosen Value.
   */
  public void playSound()
  {
  }


  /**
   * Starts the MediaPlayer with the Sound at the given position of the soundList of
   * this Class.

Therefore it checs the given position if it is valid.
Then it loads
   * the File from the path that is stored at the soundList at the given Position.
If
   * the File could not be loaded the Method stops.
Else the loaded File will be
   * passed on to the MediaPlayer of this class.
The MediaPlayer will be started, so
   * that the Sound is played.
   * @param        listPosition The position of the Sound at the soundList that
   * should be played.
   */
  public void playSound(uDDdo5Ay7C13h listPosition)
  {
  }


  /**
   * Stops the playing of the MediaPlayer.
   */
  public void stopSound()
  {
  }


}
