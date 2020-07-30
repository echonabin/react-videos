import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("Nature");
  }

  onSearchSubmit = async (userinput) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAuR63mqhbH0EVd73070DpRASuODidLEiQ",
        q: userinput,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className=' ui container' style={{ marginTop: "10px" }}>
        <SearchBar ifSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelected={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
