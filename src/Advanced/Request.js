class Request {
    constructor() {
        this.xhr= new XMLHttpRequest();
    }

    setRequestHeader(a, b) {
        if(this.headerCache===undefined)
        {
            this.headerCache={};
        }
        this.headerCache[a] = b;
    }

    setQuery(a, b) {
        if(this.query===undefined)
        {
            this.query={};
        }
        this.query[a] = b;

    }

    send(url,me,callback) {
        if(this.query)
        {
            for(let key in this.query)
            {
                url+="&"+key+"="+this.query[key];
            }
        }
        this.xhr.open(url,me,...);

        if(this.headerCache)
        {
            this.xhr.setRequestHeader()
        }
    }

    send(callback)
    {
        this.xhr.onload=function (param) {
            callback(param)
          }    
    }


}