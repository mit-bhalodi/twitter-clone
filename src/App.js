import './App.css';
import Nav from './Components/Nav/Nav';
import Tweet from './Components/Tweet/Tweet';

function App() {
  return (
    <div className='main__container container'>
      <header className='header__section'>
        <div className='nav__wrapper'>
          <div className='flex-column'>
            <Nav />
            <button type="button" className="btn btn-primary btn-lg rounded-5 my-2" style={{ width: "90%" }}>Tweet</button>
          </div>
        </div>
      </header>
      <main className='main__section'>

        <div className='main__section__first ps-4'>
          <div className='header__bar py-3 pe-4'>
            <div className='flex-fill'>Home</div>
            <i className='material-symbols-rounded font-size-26'>double_arrow</i>
          </div>
          <div className='tweets__wrapper'>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </div>

        <div className='main__section__second ms-4 pt-3'>
          <div class="form-group">
            <input type="email" className="form-control rounded-5 " id="exampleFormControlInput1" placeholder="Search Twitter" />
          </div>
          <div className='what__is__happening mt-4 ms-2'>
              <div className='h4 font-weight-700'>What’s happening</div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
