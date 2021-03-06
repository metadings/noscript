
const wordCharRx = /\w/g;
function fuzzify(s) {
  return s.replace(wordCharRx, '\\W*(?:/[*/][\\s\\S]*)?$&');
}

const IC_COMMENT_PATTERN = '\\s*(?:\\/[\\/\\*][\\s\\S]+)?';
const IC_WINDOW_OPENER_PATTERN = fuzzify("alert|confirm|prompt|open(?:URL)?|print|show") + "\\w*" + fuzzify("Dialog");
const IC_EVAL_PATTERN = "\\b(?:" +
  fuzzify('eval|set(?:Timeout|Interval)|(?:f|F)unction|Script|toString|Worker|document|constructor|generateCRMFRequest|jQuery|fetch|write(?:ln)?|__(?:define(?:S|G)etter|noSuchMethod)__|definePropert(?:y|ies)') +
   "|\\$|" + IC_WINDOW_OPENER_PATTERN + ")\\b";
const IC_EVENT_PATTERN = "on(?:m(?:o(?:z(?:browser(?:beforekey(?:down|up)|afterkey(?:down|up))|(?:network(?:down|up)loa|accesskeynotfoun)d|pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|interrupt(?:begin|end)|key(?:down|up)onplugin)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|a(?:p(?:se(?:tmessagestatus|ndmessage)|message(?:slisting|update)|folderlisting|getmessage)req|rk)|essage)|c(?:o(?:n(?:nect(?:i(?:on(?:statechanged|available)|ng)|ed)?|t(?:rol(?:lerchange|select)|extmenu)|figurationchange)|m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|py)|h(?:a(?:r(?:ging(?:time)?change|acteristicchanged)|nge)|ecking)|a(?:n(?:play(?:through)?|cel)|(?:llschang|ch)ed|rdstatechange)|u(?:rrent(?:channel|source)changed|echange|t)|l(?:i(?:rmodechange|ck)|ose)|(?:fstate|ell)change)|p(?:o(?:inter(?:l(?:ock(?:change|error)|eave)|o(?:ver|ut)|cancel|enter|down|move|up)|p(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|ster)|a(?:i(?:ring(?:con(?:firmation|sent)req|aborted)|nt)|ge(?:hide|show)|(?:st|us)e)|u(?:ll(?:vcard(?:listing|entry)|phonebook)req|sh(?:subscriptionchange)?)|r(?:o(?:pertychange|gress)|eviewstatechange)|(?:(?:ending|ty|s)chang|ic(?:hang|tur))e|lay(?:ing)?|hoto)|d(?:e(?:vice(?:p(?:roximity|aired)|(?:orienta|mo)tion|(?:unpaire|foun)d|change|light)|l(?:ivery(?:success|error)|eted)|activate)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed)?)|playpasskeyreq|abled)|aling)|r(?:a(?:g(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|in)|op)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)?|urationchange|ownloading|blclick)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|o(?:rage(?:areachanged)?|p)|k(?:sessione|comma)nd)|e(?:lect(?:ionchange|start)?|ek(?:ing|ed)|n(?:ding|t)|t)|ou(?:rce(?:(?:clos|end)ed|open)|nd(?:start|end))|c(?:(?:anningstate|ostatus)changed|roll)|pe(?:akerforcedchange|ech(?:start|end))|u(?:ccess|spend|bmit)|h(?:utter|ow))|r(?:e(?:s(?:ourcetimingbufferfull|u(?:m(?:ing|e)|lt)|ize|et)|mo(?:ve(?:sourcebuffer|track)|te(?:resume|hel)d)|ad(?:y(?:statechange)?|success|error)|c(?:orderstatechange|eived)|questmediaplaystatus|pea(?:tEven)?t|loadpage|trieving)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|(?:(?:adiost)?ate|t)change|ds(?:dis|en)abled)|a(?:n(?:imation(?:iteration|start|end)|tennaavailablechange)|d(?:d(?:sourcebuffer|track)|apter(?:remov|add)ed)|ttribute(?:(?:write|read)req|changed)|fter(?:(?:scriptexecu|upda)te|print)|b(?:solutedeviceorientation|ort)|ctiv(?:estatechanged|ate)|udio(?:process|start|end)|2dpstatuschanged|lerting)|Moz(?:S(?:wipeGesture(?:(?:May)?Start|Update|End)?|crolledAreaChanged)|M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|(?:Press)?TapGesture|AfterPaint)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|e(?:ditfocus|victed)|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut))|deactivate)|gin(?:Event)?)|u(?:fferedamountlow|sy)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|w(?:eb(?:kit(?:Animation(?:Iteration|Start|End)|animation(?:iteration|start|end)|(?:TransitionE|transitione)nd)|socket)|a(?:it|rn)ing|heel)|e(?:n(?:ter(?:pincodereq)?|(?:crypt|abl)ed|d(?:Event|ed)?)|m(?:ergencycbmodechange|ptied)|(?:itbroadcas|vic)ted|rror(?:update)?|xit)|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|ullscreen(?:change|error)|i(?:lterchange|nish)|a(?:cesdetect|il)ed|requencychange|etch)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|ing(?:error|done)?|start)?|s(?:tpointer|e)capture)|(?:anguage|evel)change|y)|o(?:(?:(?:rientation|tastatus)chang|(?:ff|n)lin)e|b(?:expasswordreq|solete)|verflow(?:changed)?|pen)|t(?:o(?:uch(?:cancel|start|move|end)|ggle)|ime(?:update|out)|e(?:rminate|xt)|ransitionend|ypechange)|u(?:p(?:date(?:(?:fou|e)nd|ready|start)?|gradeneeded)|s(?:erproximity|sdreceived)|n(?:derflow|load))|v(?:rdisplay(?:(?:dis)?connect|presentchange)|o(?:ice(?:schanged|change)|lumechange)|ersionchange)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|(?:otpointercaptur|roupchang)e|et)|h(?:e(?:adphoneschange|l[dp])|(?:fp|id)statuschanged|ashchange|olding)|i(?:cc(?:(?:info)?change|(?:un)?detected)|n(?:coming|stall|valid|put))|n(?:o(?:tificationcl(?:ick|ose)|update|match)|ewrdsgroup)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Zoom)|key(?:press|down|up)|(?:AppComman|Loa)d|Request|zoom)"
  // autogenerated from nsHtml5AtomList.h and nsGkAtomList.h
  ;
const IC_EVENT_DOS_PATTERN =
      "\\b(?:" + IC_EVENT_PATTERN + ")[\\s\\S]*=[\\s\\S]*\\b(?:" + IC_WINDOW_OPENER_PATTERN + ")\\b" +
      "|\\b(?:" + IC_WINDOW_OPENER_PATTERN + ")\\b[\\s\\S]+\\b(?:" + IC_EVENT_PATTERN + ")[\\s\\S]*=";

var InjectionChecker = {
  reset: function () {

    this.isPost =
      this.base64 =
      this.nameAssignment = false;

    this.base64tested = [];

  },

  fuzzify: fuzzify,
  syntax: new SyntaxChecker(),
  _log: function(msg, t, i) {
    if (msg) msg = this._printable(msg);
    if(!(i || t)) {
      msg += " - LINES: ";
      var lines = [];
      for (var stack = Components.stack; (stack = stack.caller);) {
        lines.push(stack.lineNumber);
      }
      msg += lines.join(", ");
    }
    else {
      if (t) msg += " - TIME: " + (Date.now() - t);
      if (i) msg += " - ITER: " + i;
    }
    this.dump("[NoScript InjectionChecker] " + msg + "\n");
  },

  _printable: function (msg) {
    return msg.toString().replace(/[^\u0020-\u007e]/g, function(s) { return "{" + s.charCodeAt(0).toString(16) + "}"; });
  },

  dump: dump,
  log: function() {},
  get logEnabled() { return this.log == this._log; },
  set logEnabled(v) { this.log = v ? this._log : function() {}; },

  escalate: function(msg) {
    this.log(msg);
    ns.log("[NoScript InjectionChecker] " + msg);
  },

  bb: function(brac, s, kets) {
    for(var j = 3; j-- > 0;) {
      s = brac + s + kets;
      if (this.checkJSSyntax(s)) return true;
    }
    return false;
  },

  checkJSSyntax: function(s) {
    // bracket balancing for micro injections like "''), e v a l (name,''"
    if (/^(?:''|"")?[^\('"]*\)/.test(s)) return this.bb("x(\n", s, "\n)");
    if (/^(?:''|"")?[^\['"]*\\]/.test(s)) return this.bb("y[\n", s, "\n]");
    if (/^(?:''|"")?[^\{'"]*\}/.test(s)) return this.bb("function z() {\n", s, "\n}");

    s += " /* COMMENT_TERMINATOR */\nDUMMY_EXPR";
    if (this.syntax.check(s)) {
      this.log("Valid fragment " + s);
      return true;
    }
    return false;
  },

  get breakStops() {
    var def = "\\/\\?&#;\\s\\x00}<>"; // we stop on URL, JS and HTML delimiters
    var bs = {
      nq: new RegExp("[" + def + "]")
    };
    Array.forEach("'\"`", // special treatment for quotes
      function(c) { bs[c] = new RegExp("[" + def + c + "]"); }
    );
    delete this.breakStops;
    return this.breakStops = bs;
  },

  collapseChars: (s) => s.replace(/\;+/g, ';').replace(/\/{4,}/g, '////')
        .replace(/\s+/g, (s) => /\n/g.test(s) ? '\n' : ' '),

  _reduceBackslashes: (bs) => bs.length % 2 ? "\\" : "",

  reduceQuotes: function(s) {
    if (s[0] == '/') {
      // reduce common leading path fragment resembling a regular expression or a comment
      s = s.replace(/^\/[^\/\n\r]+\//, '_RX_').replace(/^\/\/[^\r\n]*/, '//_COMMENT_');
    }

    if (/\/\*/.test(s) || // C-style comments, would make everything really tricky
      /\w\s*(\/\/[\s\S]*)?\[[\s\S]*\w[\s\S]*\]/.test(s)) { // property accessors, risky
      return s;
    }

    if (/['"\/]/.test(s)) {

      // drop noisy backslashes
      s = s.replace(/\\{2,}/g, this._reduceBackslashes);

      // drop escaped quotes
      s = s.replace(/\\["'\/]/g, " EQ ");
      var expr;
      for(;;) {
         expr = s.replace(/(^[^'"\/]*[;,\+\-=\(\[]\s*)\/[^\/]+\//g, "$1 _RX_ ")
                .replace(/(^[^'"\/]*)(["']).*?\2/g, "$1 _QS_ ");
         if(expr == s) break;
         s = expr;
      }
    }

    // remove c++ style comments
    return s.replace(/^([^'"`\\]*?)\/\/[^\r\n]*/g, "$1//_COMMENT_");
  },

  reduceURLs: function(s) {
    // nested URLs with protocol are parsed as C++ style comments, and since
    // they're potentially very expensive, we preemptively remove them if possible
    while (/^[^'"]*?:\/\//.test(s)) {
      s = s.replace(/:\/\/[^*\s]*/, ':');
    }
    s = s.replace(/:\/\/[^'"*\n]*/g, ':');

    return (/\bhttps?:$/.test(s) && !/\bh\W*t\W*t\W*p\W*s?.*=/.test(s))
      ? s.replace(/\b(?:[\w.]+=)?https?:$/, '')
      : s;
  },

  reduceJSON: function(s) {
    const toStringRx = /^function\s*toString\(\)\s*{\s*\[native code\]\s*\}$/;
    // optimistic case first, one big JSON block
    for (;;) {

      let m = s.match(/{[\s\S]+}/);
      if (!m) return s;

      let whole = s;
      let expr = m[0];
      let json = ns.json;
      if (json) {
        try {
          if (!toStringRx.test(JSON.parse(expr).toString))
            return s;

          this.log("Reducing big JSON " + expr);
          return s.replace(expr, '{}');
        } catch(e) {}
      }

      // heavier duty, scattered JSON blocks
      while((m = s.match(/\{[^\{\}:]+:[^\{\}]+\}/g))) {
        let prev = s;

        for (expr  of m) {
          if (json) try {
            if (!toStringRx.test(JSON.parse(expr).toString))
              continue;

            this.log("Reducing JSON " + expr);
            s = s.replace(expr, '{}');
            continue;
          } catch(e) {}

          if (/\btoString\b[\s\S]*:/.test(expr)) continue;

          let qred = this.reduceQuotes(expr);
          if (/\{(?:\s*(?:(?:\w+:)+\w+)+;\s*)+\}/.test(qred)) {
             this.log("Reducing pseudo-JSON " + expr);
             s = s.replace(expr, '{}');
          } else if (!/[(=.]|[^:\s]\s*\[|:\s*(?:location|document|set(?:Timeout|Interval)|eval|open|show\w*Dialog|alert|confirm|prompt)\b|(?:\]|set)\s*:/.test(qred) &&
             this.checkJSSyntax("JSON = " + qred) // no-assignment JSON fails with "invalid label"
          ) {
            this.log("Reducing slow JSON " + expr);
            s = s.replace(expr, '{}');
          }
        }

        if (s == prev) break;
      }

      if (s == whole) break;
    }

    return s;
  },

  reduceXML: function reduceXML(s) {
    var res;

    for (let pos = s.indexOf("<"); pos !== -1; pos = s.indexOf("<", 1)) {

      let head = s.substring(0, pos);
      let tail = s.substring(pos);

      let qnum = 0;
      for (pos = -1; (pos = head.indexOf('"', ++pos)) > -1; ) {
        if (pos === 0 || head[pos - 1] != '\\') qnum++;
      }
      if (qnum % 2)  break; // odd quotes

      let t = tail.replace(/^<(\??\s*\/?[a-zA-Z][\w:-]*)(?:[\s+]+[\w:-]+="[^"]*")*[\s+]*(\/?\??)>/, '<$1$2>');

      (res || (res = [])).push(head);
      s = t;
    }
    if (res) {
      res.push(s);
      s = res.join('');
    }

    return s;
  }
,

  _singleAssignmentRx: new RegExp(
    "(?:\\b" + fuzzify('document') + "\\b[\\s\\S]*\\.|\\s" + fuzzify('setter') + "\\b[\\s\\S]*=)|/.*/[\\s\\S]*(?:\\.(?:" +
     "\\b" + fuzzify("onerror") + "\\b[\\s\\S]*=|" +
      + fuzzify('source|toString') + ")|\\[)|" + IC_EVENT_DOS_PATTERN
  ),
  _riskyAssignmentRx: new RegExp(
    "\\b(?:" + fuzzify('location|innerHTML|outerHTML') + ")\\b[\\s\\S]*="
  ),
  _nameRx: new RegExp(
    "=[\\s\\S]*\\b" + fuzzify('name') + "\\b|" +
    fuzzify("hostname") + "[\\s\\S]*=[\\s\\S]*(?:\\b\\d|[\"'{}~^|<*/+-])"
  ),
  _evalAliasingRx: new RegExp(
    "=[\\s\\S]+\\[" + IC_EVAL_PATTERN + "\\W*\\]" // TODO: check if it can be coalesced into _maybeJSRx
  ),

  _maybeJSRx: new RegExp(
    // accessor followed by function call or assignment.
    '(?:(?:\\[[\\s\\S]*\\]|\\.\\D)[\\s\\S]*(?:\\([\\s\\S]*\\)|`[\\s\\S]+`|=[\\s\\S]*\\S)' +
    // double function call
    '|\\([\\s\\S]*\\([\\s\\S]*\\)' +
    ')|(?:^|\\W)(?:' + IC_EVAL_PATTERN +
    ')(?:\\W+[\\s\\S]*|)[(`]|(?:[=(]|\\{[\\s\\S]+:)[\\s\\S]*(?:' + // calling eval-like functions directly or...
    IC_EVAL_PATTERN + // ... assigning them to another function possibly called by the victim later
    ')[\\s\\S]*[\\n,;:|]|\\b(?:' +
    fuzzify('setter|location|innerHTML|outerHTML') +  // eval-like assignments
    ')\\b[\\s\\S]*=|' +
    '.' + IC_COMMENT_PATTERN + "src" + IC_COMMENT_PATTERN + '=' +
    IC_EVENT_DOS_PATTERN +
    "|\\b" + fuzzify("onerror") + "\\b[\\s\\S]*=" +
    "|=[s\\\\[ux]?\d{2}" + // escape (unicode/ascii/octal)
    "|\\b(?:toString|valueOf)\\b" + IC_COMMENT_PATTERN + "=[\\s\\S]*(?:" + IC_EVAL_PATTERN + ")" +
    "|(?:\\)|(?:[^\\w$]|^)[$a-zA-Z_\\u0ff-\\uffff][$\\w\\u0ff-\\uffff]*)" + IC_COMMENT_PATTERN + '=>' + // concise function definition
    "|(?:[^\\w$]|^)" + IC_EVENT_PATTERN + IC_COMMENT_PATTERN + "="
  )
 ,

  _riskyParensRx: new RegExp(
    "(?:^|\\W)(?:(?:" + IC_EVAL_PATTERN + "|on\\w+)\\s*[(`]|" +
    fuzzify("with") + "\\b[\\s\\S]*\\(|" +
    fuzzify("for") + "\\b[\\s\\S]*\\([\\s\\S]*[\\w$\\u0080-\\uffff]+[\\s\\S]*\\b(?:" +
    fuzzify ("in|of") + ")\\b)"
  ),

  _dotRx: /\./g,
  _removeDotsRx: /^openid\.[\w.-]+(?==)|(?:[?&#\/]|^)[\w.-]+(?=[\/\?&#]|$)|[\w\.]*\.(?:\b[A-Z]+|\w*\d|[a-z][$_])[\w.-]*|=[a-z.-]+\.(?:com|net|org|biz|info|xxx|[a-z]{2})(?:[;&/]|$)/g,
  _removeDots: (p) => p.replace(InjectionChecker._dotRx, '|'),
  _arrayAccessRx: /\s*\[\d+\]/g,
  _riskyOperatorsRx: /[+-]{2}\s*(?:\/[*/][\s\S]+)?(?:\w+(?:\/[*/][\s\S]+)?[[.]|location)|(?:\]|\.\s*(?:\/[*/][\s\S]+)?\w+|location)\s*(?:\/[*/][\s\S]+)?([+-]{2}|[+*\/<>~-]+\s*(?:\/[*/][\s\S]+)?=)/, // inc/dec/self-modifying assignments on DOM props
  _assignmentRx: /^(?:[^()="'\s]+=(?:[^(='"\[+]+|[?a-zA-Z_0-9;,&=/]+|[\d.|]+))$/,
  _badRightHandRx: /=[\s\S]*(?:_QS_\b|[|.][\s\S]*source\b|<[\s\S]*\/[^>]*>)/,
  _wikiParensRx: /^(?:[\w.|-]+\/)*\(*[\w\s-]+\([\w\s-]+\)[\w\s-]*\)*$/,
  _neutralDotsRx: /(?:^|[\/;&#])[\w-]+\.[\w-]+[\?;\&#]/g,
  _openIdRx: /^scope=(?:\w+\+)\w/, // OpenID authentication scope parameter, see http://forums.informaction.com/viewtopic.php?p=69851#p69851
  _gmxRx: /\$\(clientName\)-\$\(dataCenter\)\.(\w+\.)+\w+/, // GMX webmail, see http://forums.informaction.com/viewtopic.php?p=69700#p69700

  maybeJS: function(expr) {


    if (/`[\s\S]*`/.test(expr) ||  // ES6 templates, extremely insidious!!!
        this._evalAliasingRx.test(expr) ||
        this._riskyOperatorsRx.test(expr) // this must be checked before removing dots...
        ) return true;

    expr = // dotted URL components can lead to false positives, let's remove them
      expr.replace(this._removeDotsRx, this._removeDots)
        .replace(this._arrayAccessRx, '_ARRAY_ACCESS_')
        .replace(/<([\w:]+)>[^</(="'`]+<\/\1>/g, '<$1/>') // reduce XML text nodes
        .replace(/<!--/g, '') // remove HTML comments preamble (see next line)
        .replace(/(^(?:[^/]*[=;.+-])?)\s*[\[(]+/g, '$1') // remove leading parens and braces
        .replace(this._openIdRx, '_OPENID_SCOPE_=XYZ')
        .replace(/^[^=]*OPENid\.(\w+)=/gi, "OPENid_\1")
        .replace(this._gmxRx, '_GMX_-_GMX_')
        ;

    if (expr.indexOf(")") !== -1) expr += ")"; // account for externally balanced parens
    if(this._assignmentRx.test(expr) && !this._badRightHandRx.test(expr)) // commonest case, single assignment or simple chained assignments, no break
       return this._singleAssignmentRx.test(expr) || this._riskyAssignmentRx.test(expr) && this._nameRx.test(expr);

    return this._riskyParensRx.test(expr) ||
      this._maybeJSRx.test(expr.replace(this._neutralDotsRx, '')) &&
        !this._wikiParensRx.test(expr);

  },

  checkNonTrivialJSSyntax: function(expr) {
    return this.maybeJS(this.reduceQuotes(expr)) && this.checkJSSyntax(expr);
  },


  wantsExpression: (s) => /(?:^[+-]|[!%&(,*/:;<=>?\[^|]|[^-]-|[^+]\+)\s*$/.test(s),

  stripLiteralsAndComments: function(s) {
    "use strict";

    const MODE_NORMAL = 0;
    const MODE_REGEX = 1;
    const MODE_SINGLEQUOTE = 2;
    const MODE_DOUBLEQUOTE = 3;
    const MODE_BLOCKCOMMENT = 4;
    const MODE_LINECOMMENT = 6;
    const MODE_INTERPOLATION = 7;

    let mode = MODE_NORMAL;
    let escape = false;
    let res = [];
    function handleQuotes(c, q, type) {
       if (escape) {
          escape = false;
        } else if (c == '\\') {
          escape = true;
        } else if (c === q) {
          res.push(type);
          mode = MODE_NORMAL;
        }
    }
    for (let j = 0, l = s.length; j < l; j++) {

        switch(mode) {
          case MODE_REGEX:
            handleQuotes(s[j], '/', "_REGEXP_");
            break;
          case MODE_SINGLEQUOTE:
            handleQuotes(s[j], "'", "_QS_");
            break;
          case MODE_DOUBLEQUOTE:
            handleQuotes(s[j], '"', "_DQS_");
            break;
          case MODE_INTERPOLATION:
            handleQuotes(s[j], '`', "``");
            break;
          case MODE_BLOCKCOMMENT:
            if (s[j] === '/' && s[j-1] === '*') {
               res.push("/**/");
               mode = MODE_NORMAL;
            }
            break;
          case MODE_LINECOMMENT:
            if (s[j] === '\n') {
               res.push("//\n");
               mode = MODE_NORMAL;
            }
            break;
        default:
          switch(s[j]) {
             case '"':
                mode = MODE_DOUBLEQUOTE;
                break;
             case "'":
                mode = MODE_SINGLEQUOTE;
                break;
             case "`":
                mode = MODE_INTERPOLATION;
                break;
             case '/':
                switch(s[j+1]) {
                   case '*':
                      mode = MODE_BLOCKCOMMENT;
                      j+=2;
                      break;
                   case '/':
                      mode = MODE_LINECOMMENT;
                      break;
                   default:
                      let r = res.join('');
                      res = [r];
                      if (this.wantsExpression(r)) mode = MODE_REGEX;
                      else res.push('/'); // after a self-contained expression: division operator
                }
                break;
             default:
                res.push(s[j]);
          }

       }
    }
    return res.join('');
  },

  checkLastFunction: function() {
    var fn = this.syntax.lastFunction;
    if (!fn) return false;
    var m = fn.toSource().match(/\{([\s\S]*)\}/);
    if (!m) return false;
    var expr = this.stripLiteralsAndComments(m[1]);
    return /=[\s\S]*cookie|\b(?:setter|document|location|(?:inn|out)erHTML|\.\W*src)[\s\S]*=|[\w$\u0080-\uffff\)\]]\s*[\[\(]/.test(expr) ||
            this.maybeJS(expr);
  },

  _createInvalidRanges: function() {
    function x(n) { return '\\u' + ("0000" + n.toString(16)).slice(-4); }

    var ret = "";
    var first = -1;
    var last = -1;
    var cur = 0x7e;
    while(cur++ <= 0xffff) {
      try {
        eval("var _" + String.fromCharCode(cur) + "_=1");
      } catch(e) {
        if (!/illegal char/.test(e.message)) continue;
        if (first == -1) {
          first = last = cur;
          ret += x(cur);
          continue;
        }
        if (cur - last == 1) {
          last = cur;
          continue;
        }

        if(last != first) ret += "-" + x(last);
        ret+= x(cur);
        last = first = cur;
      }
    }
    return ret;
  },

  get invalidCharsRx() {
    delete this.invalidCharsRx;
    return this.invalidCharsRx = new RegExp("^[^\"'`/<>]*[" + this._createInvalidRanges() + "]");
  },

  checkJSBreak: function InjectionChecker_checkJSBreak(s) {
    // Direct script injection breaking JS string literals or comments


    // cleanup most urlencoded noise and reduce JSON/XML
    s = ';' + this.reduceXML(this.reduceJSON(this.collapseChars(
        s.replace(/\%\d+[a-z\(]\w*/gi, '§')
          .replace(/[\r\n\u2028\u2029]+/g, "\n")
          .replace(/[\x01-\x09\x0b-\x20]+/g, ' ')
        )));

    if (s.indexOf("*/") > 0 && /\*\/[\s\S]+\/\*/.test(s)) { // possible scrambled multi-point with comment balancing
      s += ';' + s.match(/\*\/[\s\S]+/);
    }

    if (!this.maybeJS(s)) return false;

    const MAX_TIME = 8000, MAX_LOOPS = 1200;

    const logEnabled = this.logEnabled;

    const
      invalidCharsRx = /[\u007f-\uffff]/.test(s) && this.invalidCharsRx,
      dangerRx = /\(|(?:^|[+-]{2}|[+*/<>~-]+\\s*=)|`[\s\S]*`|\[[^\]]+\]|(?:setter|location|(?:inn|out)erHTML|cookie|on\w{3,}|\.\D)[^&]*=[\s\S]*?(?:\/\/|[\w$\u0080-\uFFFF.[\]})'"-]+)/,
      exprMatchRx = /^[\s\S]*?(?:[=\)]|`[\s\S]*`|[+-]{2}|[+*/<>~-]+\\s*=)/,
      safeCgiRx = /^(?:(?:[\.\?\w\-\/&:§\[\]]+=[\w \-:\+%#,§\.]*(?:[&\|](?=[^&\|])|$)){2,}|\w+:\/\/\w[\w\-\.]*)/,
        // r2l, chained query string parameters, protocol://domain
      headRx = /^(?:[^'"\/\[\(]*[\]\)]|[^"'\/]*(?:§|[^&]&[\w\.]+=[^=]))/
        // irrepairable syntax error, such as closed parens in the beginning
    ;

    const injectionFinderRx = /(['"`#;>:{}]|[/?=](?![?&=])|&(?![\w-.[\]&!-]*=)|\*\/)(?!\1)/g;
    injectionFinderRx.lastIndex = 0;

    const t = Date.now();
    var iterations = 0;

    for (let dangerPos = 0, m; (m = injectionFinderRx.exec(s));) {

      let startPos = injectionFinderRx.lastIndex;
      let subj = s.substring(startPos);
      if (startPos > dangerPos) {
        dangerRx.lastIndex = startPos;
        if (!dangerRx.exec(s)) {
          this.log("Can't find any danger in " + s);
          return false;
        }
        dangerPos = dangerRx.lastIndex;
      }

      let breakSeq = m[1];
      let quote = breakSeq in this.breakStops ? breakSeq : '';

      if (!this.maybeJS(quote ? quote + subj : subj)) {
         this.log("Fast escape on " + subj, t, iterations);
         return false;
      }

      let script = this.reduceURLs(subj);

      if (script.length < subj.length) {
        if (!this.maybeJS(script)) {
          this.log("Skipping to first nested URL in " + subj, t, iterations);
          injectionFinderRx.lastIndex += subj.indexOf("://") + 1;
          continue;
        }
        subj = script;
        script = this.reduceURLs(subj.substring(0, dangerPos - startPos));
      } else {
        script = subj.substring(0, dangerPos - startPos);
      }

      let expr = subj.match(exprMatchRx);

      if (expr) {
        expr = expr[0];
        if (expr.length < script.length) {
          expr = script;
        }
      } else {
        expr = script;
      }

      // quickly skip (mis)leading innocuous CGI patterns
      if ((m = subj.match(safeCgiRx))) {

        this.log("Skipping CGI pattern in " + subj);

        injectionFinderRx.lastIndex += m[0].length - 1;
        continue;
      }

      let bs = this.breakStops[quote || 'nq']

      for (let len = expr.length, moved = false, hunt = !!expr, lastExpr = ''; hunt;) {

        if (Date.now() - t > MAX_TIME) {
          this.log("Too long execution time! Assuming DOS... " + (Date.now() - t), t, iterations);
          return true;
        }

        hunt = expr.length < subj.length;

        if (moved) {
          moved = false;
        } else if (hunt) {
          let pos = subj.substring(len).search(bs);
          if (pos < 0) {
            expr = subj;
            hunt = false;
          } else {
            len += pos;
            if (quote && subj[len] === quote) {
              len++;
            } else if (subj[len - 1] === '<') {
              // invalid JS, and maybe in the middle of XML block
              len++;
              continue;
            }
            expr = subj.substring(0, len);
            if (pos === 0) len++;
          }
        }

        if(lastExpr === expr) {
          lastExpr = '';
          continue;
        }

        lastExpr = expr;

        if(invalidCharsRx && invalidCharsRx.test(expr)) {
          this.log("Quick skipping invalid chars");
          break;
        }



        if (quote) {
          if (this.checkNonTrivialJSSyntax(expr)) {
            this.log("Non-trivial JS inside quoted string detected", t, iterations);
            return true;
          }
          script = this.syntax.unquote(quote + expr, quote);
          if(script && this.maybeJS(script) &&
            (this.checkNonTrivialJSSyntax(script) ||
              /'./.test(script) && this.checkNonTrivialJSSyntax("''" + script + "'") ||
              /"./.test(script) && this.checkNonTrivialJSSyntax('""' + script + '"')
            ) && this.checkLastFunction()
            ) {
            this.log("JS quote Break Injection detected", t, iterations);
            return true;
          }
          script = quote + quote + expr + quote;
        } else {
          script = expr;
        }

        if (headRx.test(script.split("//")[0])) {
          let balanced = script.replace(/^[^"'{}(]*\)/, 'P ');
          if (balanced !== script && balanced.indexOf('(') > -1) {
            script = balanced + ")";
          } else {
            this.log("SKIP (head syntax) " + script, t, iterations);
            break; // unrepairable syntax error in the head, move left cursor forward
          }
        }

        if (this.maybeJS(this.reduceQuotes(script))) {

          if (this.checkJSSyntax(script) && this.checkLastFunction()) {
            this.log("JS Break Injection detected", t, iterations);
            return true;
          }
          if (++iterations > MAX_LOOPS) {
            this.log("Too many syntax checks! Assuming DOS... " + s, t, iterations);
            return true;
          }
          if(this.syntax.lastError) { // could be null if we're here thanks to checkLastFunction()
            let errmsg = this.syntax.lastError.message;
            if (logEnabled) this.log(errmsg + " --- " + this.syntax.sandbox.script + " --- ", t, iterations);
            if(!quote) {
              if (errmsg.indexOf("left-hand") !== -1) {
                let m = subj.match(/^([^\]\(\\'"=\?]+?)[\w$\u0080-\uffff\s]+[=\?]/);
                if (m) {
                  injectionFinderRx.lastIndex += m[1].length - 1;
                }
                break;
              } else if (errmsg.indexOf("unterminated string literal") !== -1) {
                let quotePos = subj.substring(len).search(/["']/);
                if(quotePos > -1) {
                  expr = subj.substring(0, len += ++quotePos);
                  moved = true;
                } else break;
              } else if (errmsg.indexOf("syntax error") !== -1) {
                let dblSlashPos = subj.indexOf("//");
                if (dblSlashPos > -1) {
                  let pos = subj.search(/['"\n\\\(]|\/\*/);
                  if (pos < 0 || pos > dblSlashPos)
                    break;
                }
                if (/^([\w\[\]]*=)?\w*&[\w\[\]]*=/.test(subj)) { // CGI param concatenation
                  break;
                }
              }
            } else if (errmsg.indexOf("left-hand") !== -1) break;

            if (/invalid .*\bflag\b|missing ; before statement|invalid label|illegal character|identifier starts immediately/.test(errmsg)) {
              if (errmsg.indexOf("illegal character") === -1 && /#\d*\s*$/.test(script)) { // sharp vars exceptional behavior
                if (!quote) break;
                // let's retry without quotes
                quote = lastExpr = '';
                hunt = moved = true;
              } else break;
            }
            else if((m = errmsg.match(/\b(?:property id\b|missing ([:\]\)\}]) )/))) {
              let char = m[1] || '}';
              let newLen = subj.indexOf(char, len);
              let nextParamPos = subj.substring(len).search(/[^&]&(?!&)/)
              if (newLen !== -1 && (nextParamPos === -1 || newLen <= len + nextParamPos)) {
                this.log("Extending to next " + char);
                expr = subj.substring(0, len = ++newLen);
                moved = char !== ':';
              } else if (char !== ':') {
                let lastChar = expr[expr.length - 1];
                if (lastChar === char && (len > subj.length || lastChar != subj[len - 1])) break;
                expr += char;
                moved = hunt = true;
                len++;
                this.log("Balancing " + char, t, iterations);
              } else {
                 break;
              }
            }
            else if (/finally without try/.test(errmsg)) {
              expr = "try{" + expr;
              hunt = moved = true;
            }
          }
        }
      }
    }
    this.log(s, t, iterations);
    return false;
  },


  checkJS: function(s, unescapedUni) {
    this.log(s);

    if (/\?name\b[\s\S]*:|[^&?]\bname\b/.test(s)) {
      this.nameAssignment = true;
    }

    var hasUnicodeEscapes = !unescapedUni && /\\u[0-9a-f]{4}/i.test(s);
    if (hasUnicodeEscapes && /\\u00[0-7][0-9a-f]/i.test(s)) {
      this.escalate("Unicode-escaped lower ASCII");
      return true;
    }

    if (/\\x[0-9a-f]{2}[\s\S]*['"]/i.test(s)) {
      this.escalate("Obfuscated string literal");
      return true;
    }

    if (/`[\s\S]*\$\{[\s\S]+[=(][\s\S]+\}[\s\S]*`/.test(s)) {
      this.escalate("ES6 string interpolation");
      return true;
    }

    this.syntax.lastFunction = null;
    let ret = this.checkAttributes(s) ||
      (/[\\\(]|=[^=]/.test(s) || this._riskyOperatorsRx.test(s)) &&  this.checkJSBreak(s) || // MAIN
      hasUnicodeEscapes && this.checkJS(this.unescapeJS(s), true); // optional unescaped recursion
    if (ret) {
      let msg = "JavaScript Injection in " + s;
      if (this.syntax.lastFunction) {
        msg += "\n" + this.syntax.lastFunction.toSource();
      }
      this.escalate(msg);
    }
    return ret;
  },

  unescapeJS: function(s) {
    return s.replace(/\\u([0-9a-f]{4})/gi, function(s, c) {
      return String.fromCharCode(parseInt(c, 16));
    });
  },
   unescapeJSLiteral: function(s) {
    return s.replace(/\\x([0-9a-f]{2})/gi, function(s, c) {
      return String.fromCharCode(parseInt(c, 16));
    });
  },

  unescapeCSS: function(s) {
    // see http://www.w3.org/TR/CSS21/syndata.html#characters
    return s.replace(/\\([\da-f]{0,6})\s?/gi, function($0, $1) {
      try {
        return String.fromCharCode(parseInt($1, 16));
      } catch(e) {
        return "";
      }
    });
  },

  reduceDashPlus: function(s) {
    // http://forums.mozillazine.org/viewtopic.php?p=5592865#p5592865
    return s.replace(/\-+/g, "-")
        .replace(/\++/g, "+")
        .replace(/\s+/g, ' ')
        .replace(/(?: \-)+/g, ' -')
        .replace(/(?:\+\-)+/g, '+-');
  },

  _rxCheck: function(checker, s) {
    var rx = this[checker + "Checker"];
    var ret = rx.exec(s);
    if (ret) {
      this.escalate(checker + " injection:\n" + ret + "\nmatches " + rx.source);
      return true;
    }
    return false;
  },

  AttributesChecker: new RegExp(
    "(?:\\W|^)(?:javascript:(?:[\\s\\S]+[=\\\\\\(`\\[\\.<]|[\\s\\S]*(?:\\bname\\b|\\\\[ux]\\d))|" +
    "data:(?:(?:[a-z]\\w+/\\w[\\w+-]+\\w)?[;,]|[\\s\\S]*;[\\s\\S]*\\b(?:base64|charset=)|[\\s\\S]*,[\\s\\S]*<[\\s\\S]*\\w[\\s\\S]*>))|@" +
    ("import\\W*(?:\\/\\*[\\s\\S]*)?(?:[\"']|url[\\s\\S]*\\()" +
      "|-moz-binding[\\s\\S]*:[\\s\\S]*url[\\s\\S]*\\(")
      .replace(/[a-rt-z\-]/g, "\\W*$&"),
    "i"),
  checkAttributes: function(s) {
    s = this.reduceDashPlus(s);
    if (this._rxCheck("Attributes", s)) return true;
    if (/\\/.test(s) && this._rxCheck("Attributes", this.unescapeCSS(s))) return true;
    let dataPos = s.search(/data:\S*\s/i);
    if (dataPos !== -1) {
      let data = this.urlUnescape(s.substring(dataPos).replace(/\s/g, ''));
      if (this.checkHTML(data) || this.checkAttributes(data)) return true;
    }
    return false;
  },

  HTMLChecker: new RegExp("<[^\\w<>]*(?:[^<>\"'\\s]*:)?[^\\w<>]*(?:" + // take in account quirks and namespaces
   fuzzify("script|form|style|svg|marquee|(?:link|object|embed|applet|param|i?frame|base|body|meta|ima?ge?|video|audio|bindings|set|isindex|animate") +
    ")[^>\\w])|['\"\\s\\0/](?:formaction|style|background|src|lowsrc|ping|" + IC_EVENT_PATTERN +
     ")[\\s\\0]*=", "i"),

  checkHTML: function(s) {
     let links = s.match(/\b(?:href|src|(?:form)?action)[\s\0]*=[\s\0]*(?:(["'])[\s\S]*?\1|[^'"<>][^>\s]*)/ig);
     if (links) {
      for (let l  of links) {
        l = l.replace(/[^=]*=[\s\0]*/i, '');
        l = /^["']/.test(l) ? l.replace(/^(['"])([\s\S]*)\1/g, '$2') : l.replace(/[\s>][\s\S]*/, '');
        if (/^(?:javascript|data):/i.test(l) || this._checkRecursive(l, 3)) return true;
      }
    }
    return this._rxCheck("HTML", s);
  },

  checkNoscript: function(s) {
    this.log(s);
    return s.indexOf("\x1b(J") !== -1 && this.checkNoscript(s.replace(/\x1b\(J/g, '')) || // ignored in iso-2022-jp
     s.indexOf("\x7e\x0a") !== -1 && this.checkNoscript(s.replace(/\x7e\x0a/g, '')) || // ignored in hz-gb-2312
      this.checkHTML(s) || this.checkSQLI(s) || this.checkHeaders(s);
  },

  HeadersChecker: /[\r\n]\s*(?:content-(?:type|encoding))\s*:/i,
  checkHeaders: function(s) { return this._rxCheck("Headers", s); },
  SQLIChecker: /(?:(?:(?:\b|[^a-z])union[^a-z]|\()[\w\W]*(?:\b|[^a-z])select[^a-z]|(?:updatexml|extractvalue)(?:\b|[^a-z])[\w\W]*\()[\w\W]+(?:(?:0x|x')[0-9a-f]{16}|(?:0b|b')[01]{64}|\(|\|\||\+)/i
  ,
  checkSQLI: function(s) { return this._rxCheck("SQLI", s); },

  base64: false,
  base64tested: [],
  get base64Decoder() { return Base64; }, // exposed here just for debugging purposes


  checkBase64: function(url) {
    this.base64 = false;

    const MAX_TIME = 8000;
    const DOS_MSG = "Too long execution time, assuming DOS in Base64 checks";

    this.log(url);


    var parts = url.split("#"); // check hash
    if (parts.length > 1 && this.checkBase64FragEx(unescape(parts[1])))
      return true;

    parts = parts[0].split(/[&;]/); // check query string
    if (parts.length > 0 && parts.some(function(p) {
        var pos = p.indexOf("=");
        if (pos > -1) p = p.substring(pos + 1);
        return this.checkBase64FragEx(unescape(p));
      }, this))
      return true;

    url = parts[0];
    parts = Base64.purify(url).split("/");
    if (parts.length > 255) {
      this.log("More than 255 base64 slash chunks, assuming DOS");
      return true;
    }


    var t = Date.now();
    if (parts.some(function(p) {
        if (Date.now() - t > MAX_TIME) {
            this.log(DOS_MSG);
            return true;
        }
        return this.checkBase64Frag(Base64.purify(Base64.alt(p)));
      }, this))
      return true;


    var uparts = Base64.purify(unescape(url)).split("/");

    t = Date.now();
    while(parts.length) {
      if (Date.now() - t > MAX_TIME) {
          this.log(DOS_MSG);
          return true;
      }
      if (this.checkBase64Frag(parts.join("/")) ||
          this.checkBase64Frag(uparts.join("/")))
        return true;

      parts.shift();
      uparts.shift();
    }

    return false;
  },


  checkBase64Frag: function(f) {
    if (this.base64tested.indexOf(f) < 0) {
      this.base64tested.push(f);
      try {
        var s = Base64.decode(f);
        if(s && s.replace(/[^\w\(\)]/g, '').length > 7 &&
           (this.checkHTML(s) ||
              this.checkAttributes(s))
           // this.checkJS(s) // -- alternate, whose usefulness is doubious but which easily leads to DOS
           ) {
          this.log("Detected BASE64 encoded injection: " + f + " --- (" + s + ")");
          return this.base64 = true;
        }
      } catch(e) {}
    }
    return false;
  },

  checkBase64FragEx: function(f) {
    return this.checkBase64Frag(Base64.purify(f)) || this.checkBase64Frag(Base64.purify(Base64.alt(f)));
  },


  checkURL: function(url) {
    return this.checkRecursive(url
      // assume protocol and host are safe, but keep the leading double slash to keep comments in account
      .replace(/^[a-z]+:\/\/.*?(?=\/|$)/, "//")
      // Remove outer parenses from ASP.NET cookieless session's AppPathModifier
      .replace(/\/\((S\(\w{24}\))\)\//, '/$1/')
    );
  },

  checkRecursive: function(s, depth, isPost) {
    if (typeof(depth) != "number")
      depth = 3;

    this.reset();
    this.isPost = isPost || false;

    if (ASPIdiocy.affects(s)) {
      if (this.checkRecursive(ASPIdiocy.process(s), depth, isPost))
        return true;
    } else if (ASPIdiocy.hasBadPercents(s) && this.checkRecursive(ASPIdiocy.removeBadPercents(s), depth, isPost))
      return true;

    if (FlashIdiocy.affects(s)) {
      let purged = FlashIdiocy.purgeBadEncodings(s);
      if (purged !== s && this.checkRecursive(purged, depth, isPost))
        return true;
      let decoded = FlashIdiocy.platformDecode(purged);
      if (decoded !== purged && this.checkRecursive(decoded, depth, isPost))
        return true;
    }

    if (s.indexOf("coalesced:") !== 0) {
      let coalesced = ASPIdiocy.coalesceQuery(s);
      if (coalesced !== s && this.checkRecursive("coalesced:" + coalesced, depth, isPost))
        return true;
    }

    if (isPost) {
      s = this.formUnescape(s);
      if (this.checkBase64Frag(Base64.purify(s))) return true;

      if (s.indexOf("<") > -1) {
        // remove XML-embedded Base64 binary data
        s = s.replace(/<((?:\w+:)?\w+)>[0-9a-zA-Z+\/]+=*<\/\1>/g, '');
      }

      s = "#" + s;
    } else {
      if (this.checkBase64(s.replace(/^\/{1,3}/, ''))) return true;
    }

    if (isPost) s = "#" + s; // allows the string to be JS-checked as a whole
    return this._checkRecursive(s, depth);
  },

  _checkRecursive: function(s, depth) {

    if (this.checkHTML(s) || this.checkJS(s) || this.checkSQLI(s) || this.checkHeaders(s))
      return true;

    if (s.indexOf("&") !== -1) {
      let unent = Entities.convertAll(s);
      if (unent !== s && this._checkRecursive(unent, depth)) return true;
    }

    if (--depth <= 0)
      return false;

    if (s.indexOf('+') !== -1 && this._checkRecursive(this.formUnescape(s), depth))
      return true;

    var unescaped = this.urlUnescape(s);
    let badUTF8 = this.utf8EscapeError;

    if (this._checkOverDecoding(s, unescaped))
      return true;

    if (/[\n\r\t]|&#/.test(unescaped)) {
      let unent = Entities.convertAll(unescaped).replace(/[\n\r\t]/g, '');
      if (unescaped != unent && this._checkRecursive(unent, depth)) {
        this.log("Trash-stripped nested URL match!"); // http://mxr.mozilla.org/mozilla-central/source/netwerk/base/src/nsURLParsers.cpp#100
        return true;
      }
    }

    if (/\\x[0-9a-f]/i.test(unescaped)) {
      let literal = this.unescapeJSLiteral(unescaped);
      if (unescaped !== literal && this._checkRecursive(literal, depth)) {
        this.log("Escaped literal match!");
        return true;
      }
    }

    if (unescaped.indexOf("\x1b(J") !== -1 && this._checkRecursive(unescaped.replace(/\x1b\(J/g, ''), depth) || // ignored in iso-2022-jp
        unescaped.indexOf("\x7e\x0a") !== -1 && this._checkRecursive(unescaped.replace(/\x7e\x0a/g, '')) // ignored in hz-gb-2312
      )
      return true;

    if (unescaped !== s) {
      if (badUTF8) {
        try {
          if (this._checkRecursive(this.toUnicode(unescaped, "UTF-8"))) return true;
        } catch (e) {
          this.log(e);
        }
      }
      if (this._checkRecursive(unescaped, depth)) return true;
    }

    s = this.ebayUnescape(unescaped);
    if (s != unescaped && this._checkRecursive(s, depth))
      return true;

    return false;
  },

  _checkOverDecoding: function(s, unescaped) {
    if (/%[8-9a-f]/i.test(s)) {
      const rx = /[<'"]/g;
      var m1 = unescape(this.utf8OverDecode(s, false)).match(rx);
      if (m1) {
        unescaped = unescaped || this.urlUnescape(s);
        var m0 = unescaped.match(rx);
        if (!m0 || m0.length < m1.length) {
          this.log("Potential utf8_decode() exploit!");
          return true;
        }
      }
    }
    return false;
  },

  utf8OverDecode: function(url, strict) {
    return url.replace(strict
      ? /%(?:f0%80%80|e0%80|c0)%[8-b][0-f]/gi
      : /%(?:f[a-f0-9](?:%[0-9a-f]0){2}|e0%[4-9a-f]0|c[01])%[a-f0-9]{2}/gi,
      function(m) {
        var hex = m.replace(/%/g, '');
        if (strict) {
          for (var j = 2; j < hex.length; j += 2) {
            if ((parseInt(hex.substring(j, j + 2), 16) & 0xc0) != 0x80) return m;
          }
        }
        switch (hex.length) {
          case 8:
            hex = hex.substring(2);
          case 6:
            c = (parseInt(hex.substring(0, 2), 16) & 0x3f) << 12 |
                   (parseInt(hex.substring(2, 4), 16) & 0x3f) << 6 |
                    parseInt(hex.substring(4, 6), 16) & 0x3f;
            break;
          default:
            c = (parseInt(hex.substring(0, 2), 16) & 0x3f) << 6 |
                    parseInt(hex.substring(2, 4), 16) & 0x3f;
        }
        return encodeURIComponent(String.fromCharCode(c & 0x3f));
      }
    );
  },

  toUnicode: function(s, charset) {
    let sis = Cc["@mozilla.org/io/string-input-stream;1"]
          .createInstance(Ci.nsIStringInputStream);
    sis.setData(s, s.length);
    let is = Cc["@mozilla.org/intl/converter-input-stream;1"]
          .createInstance(Ci.nsIConverterInputStream);
    is.init(sis, charset || null, 0, is.DEFAULT_REPLACEMENT_CHARACTER);
    let str = {};
    if (is.readString(4096, str) === 0) return str.value;
    let ret = [str.value];
    while (is.readString(4096, str) !== 0) {
      ret.push(str.value);
    }
    return ret.join('');
  },

  utf8EscapeError: true,
  urlUnescape: function(url, brutal) {
    var od = this.utf8OverDecode(url, !brutal);
    this.utf8EscapeError = false;
    try {
      return decodeURIComponent(od);
    } catch(warn) {
      this.utf8EscapeError = true;
      if (url != od) url += " (" + od + ")";
      this.log("Problem decoding " + url + ", maybe not an UTF-8 encoding? " + warn.message);
      return unescape(brutal ? ASPIdiocy.filter(od) : od);
    }
  },

  formUnescape: function(s, brutal) {
    return this.urlUnescape(s.replace(/\+/g, ' '), brutal);
  },

  aspUnescape: function(s) {
    return unescape(ASPIdiocy.filter(s).replace(/\+/g, ' '));
  },

  ebayUnescape: function(url) {
    return url.replace(/Q([\da-fA-F]{2})/g, function(s, c) {
      return String.fromCharCode(parseInt(c, 16));
    });
  },

  checkPost: function(channel, skip) {
    if (!((channel instanceof Ci.nsIUploadChannel)
          && channel.uploadStream && (channel.uploadStream instanceof Ci.nsISeekableStream)))
      return false;

    var clen = -1;
    try {
      clen = channel.getRequestHeader("Content-length");
    } catch(e) {}
    MaxRunTime.increase(clen < 0 || clen > 300000 ? 60 : Math.ceil(20 * clen / 100000));

    this.log("Extracting post data...");
    return this.checkPostStream(channel.URI.spec, channel.uploadStream, skip);
  },

  checkPostStream: function(url, stream, skip) {
     var ic = this;
     var pc = new PostChecker(url, stream, skip);
     return pc.check(
      function(chunk) {
        return chunk.length > 6 &&
          ic.checkRecursive(chunk, 2, !pc.isFile) && chunk;
      }
    );
  },

  testCheckPost: function(url, strData) {
    var stream = Cc["@mozilla.org/io/string-input-stream;1"].
            createInstance(Ci.nsIStringInputStream);
    stream.setData(strData, strData.length);
    return this.checkPostStream(url, stream);
  },


  checkWindowName: function (window, url) {
     var originalAttempt = window.name;
     try {
       if (/^https?:\/\/(?:[^/]*\.)?\byimg\.com\/rq\/darla\//.test(url) &&
          ns.getPref("filterXExceptions.darla_name")) {
         window.name = "DARLA_JUNK";
         return;
       }

       if (/\s*{[\s\S]+}\s*/.test(originalAttempt)) {
         try {
           JSON.parse(originalAttempt); // fast track for crazy JSON in name like on NYT
           return;
         } catch(e) {}
       }

       if (/[%=\(\\<]/.test(originalAttempt) && InjectionChecker.checkURL(originalAttempt)) {
         window.name = originalAttempt.replace(/[%=\(\\<]/g, " ");
       }

       if (originalAttempt.length > 11) {
         try {
           if ((originalAttempt.length % 4 === 0)) {
             var bin = window.atob(window.name);
             if(/[%=\(\\]/.test(bin) && InjectionChecker.checkURL(bin)) {
               window.name = "BASE_64_XSS";
             }
           }
         } catch(e) {}
       }
    } finally {
      if (originalAttempt != window.name) {
        ns.log('[NoScript XSS]: sanitized window.name, "' + originalAttempt + '"\nto\n"' + window.name + '"\nURL: ' + url);
        ns.log(url + "\n" + window.location.href);
      }
    }
  },

};

function PostChecker(url, uploadStream, skip) {
  this.url = url;
  this.uploadStream = uploadStream;
  this.skip = skip || false;
}

PostChecker.prototype = {
  boundary: null,
  isFile: false,
  postData: '',
  check: function(callback) {
    var m, chunks, data, size, available, ret;
    const BUF_SIZE = 3 * 1024 * 1024; // 3MB
    const MAX_FIELD_SIZE = BUF_SIZE;
    try {
      var us = this.uploadStream;
      us.seek(0, 0);
      const sis = Cc['@mozilla.org/binaryinputstream;1'].createInstance(Ci.nsIBinaryInputStream);
      sis.setInputStream(us);

      // reset status
      delete this.boundary;
      delete this.isFile;
      delete this.postData;

      if ((available = sis.available())) do {
        size = this.postData.length;
        if (size >= MAX_FIELD_SIZE) return size + " bytes or more in one non-file field, assuming memory DOS attempt!";

        data = sis.readBytes(Math.min(available, BUF_SIZE));

        if (size !== 0) {
          this.postData += data;
        } else {
           if (data.length === 0) return false;
           this.postData = data;
        }
        available = sis.available();
        chunks = this.parse(!available);

        for (var j = 0, len = chunks.length; j < len; j++) {
          ret = callback(chunks[j]);
          if (ret) return ret;
        }
      } while(available)
    } catch(ex) {
      dump(ex + "\n" + ex.stack + "\n");
      return ex;
    } finally {
        try {
          us.seek(0, 0); // rewind
        } catch(e) {}
    }
    return false;
  },

  parse: function(eof) {
    var postData = this.postData;
    var m;

    if (typeof(this.boundary) != "string") {
      m = postData.match(/^Content-type: multipart\/form-data;\s*boundary=(\S*)/i);
      this.boundary = m && m[1] || '';
      if (this.boundary) this.boundary = "--" + this.boundary;
      postData = postData.substring(postData.indexOf("\r\n\r\n") + 2);
    }

    this.postData = '';

    var boundary = this.boundary;

    var chunks = [];
    var j, len, name;

    var skip = this.skip;

    if (boundary) { // multipart/form-data, see http://www.faqs.org/ftp/rfc/rfc2388.txt
      if(postData.indexOf(boundary) < 0) {
        // skip big file chunks
        return chunks;
      }
      var parts = postData.split(boundary);

      var part, last;
      for(j = 0, len = parts.length; j < len;) {
        part = parts[j];
        last = ++j == len;
        if (j == 1 && part.length && this.isFile) {
          // skip file internal terminal chunk
          this.isFile = false;
          continue;
        }
        m = part.match(/^\s*Content-Disposition: form-data; name="(.*?)"(?:;\s*filename="(.*)"|[^;])\r?\n(Content-Type: \w)?.*\r?\n/i);

        if (m) {
          // name and filename are backslash-quoted according to RFC822
          name = m[1];
          if (name) {
            chunks.push(name.replace(/\\\\/g, "\\")); // name and file name
          }
          if (m[2]) {
            chunks.push(m[2].replace(/\\\\/g, "\\")); // filename
            if (m[3]) {
              // Content-type: skip, it's a file
              this.isFile = true;

              if (last && !eof)
                this.postData = part.substring(part.length - boundary.length);

              continue;
            }
          }
          if (eof || !last) {
            if (!(skip && skip.indexOf(name) !== -1))
              chunks.push(part.substring(m[0].length)); // parameter body
          } else {
            this.postData = part;
          }
          this.isFile = false;
        } else {
          // malformed part, check it all or push it back
          if (eof || !last) {
            chunks.push(part)
          } else {
            this.postData = this.isFile ? part.substring(part.length - boundary.length) : part;
          }
        }
      }
    } else {
      this.isFile = false;

      parts = postData.replace(/^\s+/, '').split("&");
      if (!eof) this.postData = parts.pop();

      for (j = 0, len = parts.length; j < len; j++) {
        m = parts[j].split("=");
        name = m[0];
        if (skip && skip.indexOf(name) > -1) continue;
        chunks.push(name, m[1] || '');
      }
    }
    return chunks;
  }
}


function XSanitizer(primaryBlacklist, extraBlacklist) {
  this.primaryBlacklist = primaryBlacklist;
  this.extraBlacklist = extraBlacklist;
  this.injectionChecker = InjectionChecker;
}

XSanitizer.prototype = {
  brutal: false,
  base64: false,
  sanitizeURL: function(url) {
    var original = url.clone();
    this.brutal = this.brutal || this.injectionChecker.checkURL(url.spec);
    this.base64 = this.injectionChecker.base64;

    const changes = { minor: false, major: false, qs: false };
    // sanitize credentials
    if (url.username) url.username = this.sanitizeEnc(url.username);
    if (url.password) url.password = this.sanitizeEnc(url.password);
    url.host = this.sanitizeEnc(url.host);

    if (url instanceof Ci.nsIURL) {
      // sanitize path

      if (url.param) {
        url.path = this.sanitizeURIComponent(url.path); // param is the URL part after filePath and a semicolon ?!
      } else if(url.filePath) {
        url.filePath = this.sanitizeURIComponent(url.filePath); // true == lenient == allow ()=
      }
      // sanitize query
      if (url.query) {
        url.query = this.sanitizeQuery(url.query, changes);
        if (this.brutal) {
          url.query = this.sanitizeWholeQuery(url.query, changes);
        }
      }
      // sanitize fragment
      var fragPos = url.path.indexOf("#");
      if (url.ref || fragPos > -1) {
        if (fragPos >= url.filePath.length + url.query.length) {
          url.path = url.path.substring(0, fragPos) + "#" + this.sanitizeEnc(url.path.substring(fragPos + 1));
        } else {
          url.ref = this.sanitizeEnc(url.ref);
        }
      }
    } else {
      // fallback for non-URL URIs, we should never get here anyway
      if (url.path) url.path = this.sanitizeURIComponent(url.path);
    }

    var urlSpec = url.spec;
    var neutralized = Entities.neutralizeAll(urlSpec, /[^\\'"\x00-\x07\x09\x0B\x0C\x0E-\x1F\x7F<>]/);
    if (urlSpec != neutralized) url.spec = neutralized;

    if (this.base64 ||
        FlashIdiocy.affects(urlSpec) ||
        FlashIdiocy.affects(unescape(urlSpec))
      ) {
      url.spec = url.prePath; // drastic, but with base64 / FlashIdiocy we cannot take the risk!
    }

    if (url.getRelativeSpec(original) && unescape(url.spec) != unescape(original.spec)) { // ok, this seems overkill but take my word, the double check is needed
      changes.minor = true;
      changes.major = changes.major || changes.qs ||
                      unescape(original.spec.replace(/\?.*/g, ""))
                        != unescape(url.spec.replace(/\?.*/g, ""));
      url.spec = url.spec.replace(/'/g, "%27")
      if (changes.major) {
        url.ref = Math.random().toString().concat(Math.round(Math.random() * 999 + 1)).replace(/0./, '') // randomize URI
      }
    } else {
      changes.minor = false;
      url.spec = original.spec.replace(/'/g, "%27");
    }
    return changes;
  },

  sanitizeWholeQuery: function(query, changes) {
    var original = query;
    query = Entities.convertAll(query);
    if (query === original) return query;
    var unescaped = InjectionChecker.urlUnescape(original, true);
    query = this.sanitize(unescaped);
    if (query === unescaped) return original;
    if(changes) changes.qs = true;
    return escape(query);
  },

  _queryRecursionLevel: 0,
  sanitizeQuery: function(query, changes, sep) {
    const MAX_RECUR = 2;

    var canRecur = this._queryRecursionLevel++ < MAX_RECUR;
    // replace every character matching noscript.filterXGetRx with a single ASCII space (0x20)
    changes = changes || {};
    if (!sep) {
      sep = query.indexOf("&") > -1 || this.brutal ? "&" : ";"
    }
    const parms = query.split(sep);

    for (let j = parms.length; j-- > 0;) {
      let pieces = parms[j].split("=");

      try {
        for (let k = pieces.length; k-- > 0;) {

          let encodedPz =  InjectionChecker.utf8OverDecode(pieces[k]);

          let pz = null, encodeURL = null;
          if (encodedPz.indexOf("+") < 0) {
            try {
              pz = decodeURIComponent(encodedPz);
              encodeURL = encodeURIComponent;
            } catch(e) {}
          }
          if (pz == null) {
            pz = unescape(ASPIdiocy.filter(encodedPz));
            encodeURL = escape;
          }

          let origPz = pz;

          // recursion for nested (partial?) URIs

          let nestedURI = null;

          if (canRecur && /^https?:\/\//i.test(pz)) {
            // try to sanitize as a nested URL
            try {
              nestedURI = IOUtil.newURI(pz).QueryInterface(Ci.nsIURL);
              changes.qs = changes.qs || this.sanitizeURL(nestedURI).major;
              if (unescape(pz).replace(/\/+$/, '') != unescape(nestedURI.spec).replace(/\/+$/, '')) pz = nestedURI.spec;
            } catch(e) {
              nestedURI = null;
            }
          }

          if (!nestedURI) {
            let qpos;
            if (canRecur &&
                 (qpos = pz.indexOf("?")) > - 1 &&
                 (spos = pz.search(/[&;]/) > qpos)) {
              // recursive query string?
              // split, sanitize and rejoin
              pz = [ this.sanitize(pz.substring(0, qpos)),
                    this.sanitizeQuery(pz.substring(qpos + 1), changes)
                   ].join("?")

            } else {
              pz = this.sanitize(pz);
            }
            if (origPz != pz) changes.qs = true;
          }

          if (origPz != pz) pieces[k] = encodeURL(pz);

        }
        parms[j] = pieces.join("=");
      } catch(e) {
        // decoding exception, skip this param
        parms.splice(j, 1);
      }
    }
    this._queryRecursionLevel--;
    return parms.join(sep);
  },

  sanitizeURIComponent: function(s) {
    try {
      var unescaped = InjectionChecker.urlUnescape(s, this.brutal);
      var sanitized = this.sanitize(unescaped);
      return sanitized == unescaped ? s : encodeURI(sanitized);
    } catch(e) {
      return "";
    }
  },
  sanitizeEnc: function(s) {
    try {
      return encodeURIComponent(this.sanitize(decodeURIComponent(s)));
    } catch(e) {
      return "";
    }
  },
  sanitize: function(unsanitized) {
    var s, orig;
    orig = s = Entities.convertDeep(unsanitized);

    if (s.indexOf('"') > -1 && !this.brutal) {
      // try to play nice on search engine queries with grouped quoted elements
      // by allowing double quotes but stripping even more aggressively other chars

      // Google preserves "$" and recognizes ~, + and ".." as operators
      // All the other non alphanumeric chars (aside double quotes) are ignored.
      // We will preserve the site: modifier as well
      // Ref.: http://www.google.com/help/refinesearch.html
      s = s.replace(/[^\w\$\+\.\~"&;\- :\u0080-\uffff]/g,
          " " // strip everything but alphnum and operators
          ).replace(":",
          function(k, pos, s) { // strip colons as well, unless it's the site: operator
            return (s.substring(0, pos) == "site" || s.substring(pos - 5) == " site") ? ":" : " "
          }
        );
      if (s.replace(/[^"]/g, "").length % 2) s += '"'; // close unpaired quotes
      return s;
    }

    if (this.brutal) {
      s = s.replace(/\x1bJ\(/g, '').replace(/\x7e\x0a/g, ''); // ignored in some encodings
    }
    // regular duty
    s = s.replace(this.primaryBlacklist, " ")
      .replace(/\bjavascript:+|\bdata:[^,]+,(?=[^<]*<|%25%20|%\s+[2-3][0-9a-f])|-moz-binding|@import/ig,
                function(m) { return m.replace(/(.*?)(\w)/, "$1#no$2"); });

    if (this.extraBlacklist) { // additional user-defined blacklist for emergencies
      s = s.replace(this.extraBlacklist, " ");
    }

    if (this.brutal) { // injection checks were positive
      s = InjectionChecker.reduceDashPlus(s)
        .replace(/\bdata:/ig, "nodata:")
        .replace(/['\(\)\=\[\]<\r\n`]/g, " ")
        .replace(/0x[0-9a-f]{16,}|0b[01]{64,}/gi, " ")
        .replace(this._dangerousWordsRx, this._dangerousWordsReplace)
        .replace(/Q[\da-fA-Fa]{2}/g, "Q20") // Ebay-style escaping
        .replace(/%[\n\r\t]*[0-9a-f][\n\r\t]*[0-9a-f]/gi, " ")
        // .replace(/percnt/, 'percent')
        ;
    }

    return s == orig ? unsanitized : s;
  },

  _regularReplRx: new RegExp(
    fuzzify('(?:javascript|data)') + '\\W*:+|' +
      fuzzify('-moz-binding|@import'),
    "ig"
  ),
  _dangerousWordsRx: new RegExp(
    '\\b(?:' + fuzzify('setter|location|innerHTML|outerHTML|cookie|name|document|toString|') +
    IC_EVAL_PATTERN + '|' + IC_EVENT_PATTERN + ')\\b',
    "g"
  ),
  _dangerousWordsReplace: (s) => s.replace(/\S/g, "$&\u2063")

};

// we need this because of https://bugzilla.mozilla.org/show_bug.cgi?id=439276

var Base64 = {

  purify: function(input) {
    return input.replace(/[^A-Za-z0-9\+\/=]+/g, '');
  },

  alt: function(s) {
    // URL base64 variant, see http://en.wikipedia.org/wiki/Base64#URL_applications
    return s.replace(/-/g, '+').replace(/_/g, '/')
  },

  decode: function (input, strict) {
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    // if (/[^A-Za-z0-9\+\/\=]/.test(input)) return ""; // we don't need this, caller checks for us

    const k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    while (i < input.length) {

        enc1 = k.indexOf(input.charAt(i++));
        enc2 = k.indexOf(input.charAt(i++));
        enc3 = k.indexOf(input.charAt(i++));
        enc4 = k.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output += String.fromCharCode(chr1);

        if (enc3 != 64) {
          output += String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output += String.fromCharCode(chr3);
        }

    }
    return output;

  }
};




var ASPIdiocy = {
  _replaceRx: /%u([0-9a-fA-F]{4})/g,
  _affectsRx: /%u[0-9a-fA-F]{4}/,
  _badPercentRx: /%(?!u[0-9a-fA-F]{4}|[0-9a-fA-F]{2})|%(?:00|u0000)[^&=]*/g,

  hasBadPercents: function(s) { return this._badPercentRx.test(s) },
  removeBadPercents: function(s) { return s.replace(this._badPercentRx, ''); },
  affects: function(s) { return this._affectsRx.test(s); },
  process: function(s) {
    s = this.filter(s);
    return /[\uff5f-\uffff]/.test(s) ? s + '&' + s.replace(/[\uff5f-\uffff]/g, '?') : s;
  },
  filter: function(s) { return this.removeBadPercents(s).replace(this._replaceRx, this._replace) },

  coalesceQuery: function(s) { // HPP protection, see https://www.owasp.org/images/b/ba/AppsecEU09_CarettoniDiPaola_v0.8.pdf
    let qm = s.indexOf("?");
    if (qm < 0) return s;
    let p = s.substring(0, qm);
    let q = s.substring(qm + 1);
    if (!q) return s;

    let unchanged = true;
    let emptyParams = false;

    let pairs = (function rearrange(joinNames) {
      let pairs = q.split("&");
      let accumulator = { __proto__: null };
      for (let j = 0, len = pairs.length; j < len; j++) {
        let nv = pairs[j];
        let eq = nv.indexOf("=");
        if (eq === -1) {
          emptyParams = true;
          if (joinNames && j < len - 1) {
            pairs[j + 1] = nv + "&" + pairs[j + 1];
            delete pairs[j];
          }
          continue;
        }
        let key = "#" + unescape(nv.substring(0, eq)).toLowerCase();
        if (key in accumulator) {
          delete pairs[j];
          pairs[accumulator[key]] += ", " + nv.substring(eq + 1);
          unchanged = false;
        } else {
          accumulator[key] = j;
        }
      }
      return (emptyParams && !(unchanged || joinNames))
        ? pairs.concat(rearrange(true).filter(p => pairs.indexOf(p) === -1))
        : pairs;
    })();

    if (unchanged) return s;
    for (let j = pairs.length; j-- > 0;) if (!pairs[j]) pairs.splice(j, 1);
    return p + pairs.join("&");
  },

  _replace: function(match, hex) {
     // lazy init
     INCLUDE("ASPIdiocy");
     return ASPIdiocy._replace(match, hex);
  }
}

var FlashIdiocy = {
  _affectsRx: /%(?:[8-9a-f]|[0-7]?[^0-9a-f])/i, // high (non-ASCII) percent encoding or invalid second digit
  affects: function(s) { return this._affectsRx.test(s); },

  purgeBadEncodings: function(s) {
    INCLUDE("FlashIdiocy");
    return this.purgeBadEncodings(s);
  }
}
