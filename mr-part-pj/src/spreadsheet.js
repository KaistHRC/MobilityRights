import { useEffect, useState } from "react";


const useGoogle = () => {
    const [res, setRes] = useState();
     // TODO(developer): Set to client ID and API key from the Developer Console
    const CLIENT_ID = '982242334152-eh32f4n2s2t1s1o4dg4f2ggq5u3ia4vs.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyC8e5FpkMl4LOlRpxMWRa_Sy2j8Bb06SOQ';

    // Discovery doc URL for APIs used by the quickstart
    const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

    useEffect(() => {
      if (localStorage.getItem("db") === null) {
        const handleClientLoad = () => window.gapi.load('client:auth2', initClient)

        function makeApiCall() {
            var params = {
              // The ID of the spreadsheet to retrieve data from.
              spreadsheetId: '12hBnR4G-ACW9QnUVjveiYPbZcN0OnZdnf2-wlKuvAnw',  // TODO: Update placeholder value.
      
              // The A1 notation of the values to retrieve.
              range: "'Sheet 3'!A1:K98", 
      
            //   valueRenderOption: '',  // TODO: Update placeholder value.
      
            //   dateTimeRenderOption: '',  // TODO: Update placeholder value.
            };
      
            var request = window.gapi.client.sheets.spreadsheets.values.get(params);
            request.then(function(response) {
              // TODO: Change code below to process the `response` object:
              const jsonDB = parseIntoJson(response.result.values);
              setRes(jsonDB);
              localStorage.setItem('db', JSON.stringify(jsonDB))
            }, function(reason) {
              console.error('error: ' + reason.result.error.message);
            });
          }
        
        const initClient = () => {
            window.gapi.client.init({
              apiKey: API_KEY,
              discoveryDocs: [DISCOVERY_DOC],
              clientId: CLIENT_ID,
              scope: SCOPES,
            }).then(function() {
                makeApiCall();
                // window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
                // updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
              });
            console.log("Google loaded");
        };

        function parseIntoJson (arr) {
            const key = arr.shift()
            const jsonDB = arr.map((el) => {
                let map_el = {}
                for (let i = 0; i < key.length; i++) {
                if (el[i] == "TRUE") {
                    map_el[key[i]] = true
                } else if (el[i] == "FALSE") {
                    map_el[key[i]] = false
                } else {
                    map_el[key[i]] = el[i]
                }
                }
                return map_el
            })
            return jsonDB
        }


        const script = document.createElement('script');

        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        script.defer = true;
        script.onload = handleClientLoad;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
      } else {
        setRes(JSON.parse(localStorage.getItem('db')))
      }
    }, []);
    return res;
};

export default useGoogle; 
 
