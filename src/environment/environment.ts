const firebaseConfig = {
  apiKey: "AIzaSyB6rPL7RjTu17rvrAJJff_q5-lpgvMs19s",
  authDomain: "jotno-real.firebaseapp.com",
  databaseURL: "https://jotno-real-default-rtdb.firebaseio.com",
  projectId: "jotno-real",
  storageBucket: "jotno-real.appspot.com",
  messagingSenderId: "521523552578",
  appId: "1:521523552578:web:fcf93e4e1e72c4016828db"
};

export const environment = {
  production: false,
  firebase:  {
    ...firebaseConfig
  }
};
