/* Generated by the Nim Compiler v0.16.1 */
/*   (c) 2017 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI76458 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NTI76452 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NTI30240 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI30208 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI27038 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI27040 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI30287 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI30224 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI30238 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI30242 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI30242 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30242.node = NNI30242;
var NNI30238 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30238.node = NNI30238;
NTI30287.base = NTI30224;
var NNI30224 = {kind: 2, len: 4, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI30287, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI27040, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI27038, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI27038, name: "trace", sons: null}]};
NTI30224.node = NNI30224;
var NNI30208 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30208.node = NNI30208;
NTI30224.base = NTI30208;
NTI30238.base = NTI30224;
NTI30242.base = NTI30238;
var NNI30240 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30240.node = NNI30240;
NTI30240.base = NTI30238;
NTI76452.base = NTI27040;
NTI76458.base = NTI27040;
function makeNimstrLit(c_40803) {

    var ln = c_40803.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_40803.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    }
function SetConstr() {

      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    }
function nimCopy(dest_46017, src_46018, ti_46019) {

var result_46429 = null;
switch (ti_46019.kind) {
case 21: case 22: case 23: case 5: if (!(isFatPointer_46001(ti_46019))) {
result_46429 = src_46018;
}
else {
result_46429 = [src_46018[0], src_46018[1]];}


break;
case 19:       if (dest_46017 === null || dest_46017 === undefined) {
        dest_46017 = {};
      }
      else {
        for (var key in dest_46017) { delete dest_46017[key]; }
      }
      for (var key in src_46018) { dest_46017[key] = src_46018[key]; }
      result_46429 = dest_46017;
    
break;
case 18: case 17: if (!((ti_46019.base == null))) {
result_46429 = nimCopy(dest_46017, src_46018, ti_46019.base);
}
else {
if ((ti_46019.kind == 17)) {
result_46429 = (dest_46017 === null || dest_46017 === undefined) ? {m_type: ti_46019} : dest_46017;}
else {
result_46429 = (dest_46017 === null || dest_46017 === undefined) ? {} : dest_46017;}
}
nimCopyAux(result_46429, src_46018, ti_46019.node);

break;
case 24: case 4: case 27: case 16:       if (src_46018 === null) {
        result_46429 = null;
      }
      else {
        if (dest_46017 === null || dest_46017 === undefined) {
          dest_46017 = new Array(src_46018.length);
        }
        else {
          dest_46017.length = src_46018.length;
        }
        result_46429 = dest_46017;
        for (var i = 0; i < src_46018.length; ++i) {
          result_46429[i] = nimCopy(result_46429[i], src_46018[i], ti_46019.base);
        }
      }
    
break;
case 28:       if (src_46018 !== null) {
        result_46429 = src_46018.slice(0);
      }
    
break;
default: 
result_46429 = src_46018;
break;
}
return result_46429;
}
function eqStrings(a_43403, b_43404) {

    if (a_43403 == b_43404) return true;
    if ((!a_43403) || (!b_43404)) return false;
    var alen = a_43403.length;
    if (alen != b_43404.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_43403[i] != b_43404[i]) return false;
    return true;
  }
function toJSStr(s_41203) {

    var len = s_41203.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_41203[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_41203[i] < 128)
        asciiPart[i] = fcc(s_41203[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  }
function raiseException(e_40206, ename_40207) {

e_40206.name = ename_40207;
if ((excHandler == 0)) {
unhandledException(e_40206);
}

throw e_40206;}
var toTag_76449 = nimCopy(null, ["#text", "#int", "#bool", "#vthunk", "#dthunk", "HTML", "HEAD", "TITLE", "BASE", "LINK", "META", "STYLE", "SCRIPT", "NOSCRIPT", "BODY", "SECTION", "NAV", "ARTICLE", "ASIDE", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "FOOTER", "ADDRESS", "MAIN", "P", "HR", "PRE", "BLOCKQUOTE", "OL", "UL", "LI", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "DIV", "A", "EM", "STRONG", "SMALL", "S", "CITE", "QUOTE", "DFN", "ABBR", "DATA", "TIME", "CODE", "VAR", "SAMP", "KDB", "SUB", "SUP", "I", "B", "U", "MARK", "RUBY", "RT", "RP", "BDI", "DBO", "SPAN", "BR", "WBR", "INS", "DEL", "IMG", "IFRAME", "EMBED", "OBJECT", "PARAM", "VIDEO", "AUDIO", "SOURCE", "TRACK", "CANVAS", "MAP", "AREA", "SVG", "MATH", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "FORM", "FIELDSET", "LEGEND", "LABEL", "INPUT", "BUTTON", "SELECT", "DATALIST", "OPTGROUP", "OPTION", "TEXTAREA", "KEYGEN", "OUTPUT", "PROGRESS", "METER", "DETAILS", "SUMMARY", "COMMAND", "MENU"], NTI76452);
var toEventName_76455 = nimCopy(null, ["click", "dblclick", "keyup", "keydown", "keypressed", "blur", "change", "scroll", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "keyupenter", "keyuplater"], NTI76458);
function nimMin(a_45639, b_45640) {

var Tmp1;
var result_45641 = 0;
BeforeRet: do {
if ((a_45639 <= b_45640)) {
Tmp1 = a_45639;
}
else {
Tmp1 = b_45640;
}

result_45641 = Tmp1;
break BeforeRet;
} while (false); 
return result_45641;
}
function cstrToNimstr(c_41003) {

  var ln = c_41003.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_41003.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else if((ch > 127) && (ch < 2048)) {
      result[r] = (ch >> 6) | 192;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    else {
      result[r] = (ch >> 12) | 224;
      ++r;
      result[r] = ((ch >> 6) & 63) | 128;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  result[r] = 0; // terminating zero
  return result;
  }
var nimvm_32687 = false;
var nim_program_result = 0;
var globalRaiseHook_37805 = [null];
var localRaiseHook_37810 = [null];
var outOfMemHook_37813 = [null];
function isFatPointer_46001(ti_46003) {

var result_46004 = false;
BeforeRet: do {
result_46004 = !((SetConstr(17, 16, 4, 18, 27, 19, 23, 22, 21)[ti_46003.base.kind] != undefined));
break BeforeRet;
} while (false); 
return result_46004;
}
function nimCopyAux(dest_46022, src_46023, n_46025) {

switch (n_46025.kind) {
case 0: 
break;
case 1:       dest_46022[n_46025.offset] = nimCopy(dest_46022[n_46025.offset], src_46023[n_46025.offset], n_46025.typ);
    
break;
case 2: L1: do {
var i_46415 = 0;
var colontmp__46417 = 0;
colontmp__46417 = (n_46025.len - 1);
var res_46420 = 0;
L2: do {
L3: while (true) {
if (!(res_46420 <= colontmp__46417)) break L3;
i_46415 = res_46420;
nimCopyAux(dest_46022, src_46023, n_46025.sons[i_46415]);
res_46420 += 1;
}
} while(false);
} while(false);

break;
case 3:       dest_46022[n_46025.offset] = nimCopy(dest_46022[n_46025.offset], src_46023[n_46025.offset], n_46025.typ);
      for (var i = 0; i < n_46025.sons.length; ++i) {
        nimCopyAux(dest_46022, src_46023, n_46025.sons[i][1]);
      }
    
break;
}
}
function add_37829(x_37832, x_37832_Idx, y_37833) {

        var len = x_37832[0].length-1;
        for (var i = 0; i < y_37833.length; ++i) {
          x_37832[0][len] = y_37833.charCodeAt(i);
          ++len;
        }
        x_37832[0][len] = 0
      }
function unhandledException(e_40053) {

var Tmp1;
var buf_40054 = /**/[makeNimstrLit("")];
if (!!(eqStrings(e_40053.message, null))) Tmp1 = false; else {Tmp1 = !((e_40053.message[0] == 0)); }if (Tmp1) {
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_40054[0] = makeNimstrLit("Error: unhandled exception: ");};
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(e_40053.message); } else { buf_40054[0] = e_40053.message;};
}
else {
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_40054[0] = makeNimstrLit("Error: unhandled exception");};
}

if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit(" [")); } else { buf_40054[0] = makeNimstrLit(" [");};
add_37829(buf_40054, 0, e_40053.name);
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit("]\x0A")); } else { buf_40054[0] = makeNimstrLit("]\x0A");};
var cbuf_40201 = toJSStr(buf_40054[0]);
framePtr = null;
  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_40201);
  }
  else {
    throw cbuf_40201;
  }
  }
function raiseOverflow() {

var e_40640 = null;
e_40640 = {m_type: NTI30242, parent: null, name: null, message: null, trace: null};
e_40640.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI27038);
e_40640.parent = null;
raiseException(e_40640, "OverflowError");
}
function raiseDivByZero() {

var e_40658 = null;
e_40658 = {m_type: NTI30240, parent: null, name: null, message: null, trace: null};
e_40658.message = nimCopy(null, makeNimstrLit("division by zero"), NTI27038);
e_40658.parent = null;
raiseException(e_40658, "DivByZeroError");
}
var objectID_80232 = /**/[0];
var dirty_87054 = /**/[{}];
var someDirty_87055 = [false];
var vcomponents_87126 = /**/[{}];
var dcomponents_87138 = /**/[{}];
var toFocus_89021 = [null];
var toFocusV_89022 = [null];
var dorender_89480 = [null];
var currentTree_89481 = [null];
var appState_94089 = [null];
uibench.init("nim-karax-bfs", "0.6.1.1");
function setRendererOnly_90411(renderer_90415) {

dorender_89480[0] = renderer_90415;
}
function newVNode_76928(kind_76930) {

var result_76931 = null;
result_76931 = {kind: kind_76930, key: -1, id: null, class: null, text: null, kids: null, attrs: null, events: null, dom: null};
return result_76931;
}
function add_76914(parent_76916, kid_76917) {

if (parent_76916.kids != null) { parent_76916.kids.push(kid_76917); } else { parent_76916.kids = [kid_76917]; };
}
function tree_76933(kind_76935, kids_76937) {

var result_76938 = null;
result_76938 = newVNode_76928(kind_76935);
L1: do {
var k_76963 = null;
var i_76967 = 0;
L2: do {
L3: while (true) {
if (!(i_76967 < (kids_76937 != null ? kids_76937.length : 0))) break L3;
k_76963 = kids_76937[i_76967];
add_76914(result_76938, k_76963);
i_76967 += 1;
}
} while(false);
} while(false);
return result_76938;
}
function setAttr_76714(n_76716, key_76717, val_76718) {

BeforeRet: do {
if ((n_76716.attrs === null)) {
var x_76813 = [key_76717, val_76718];
n_76716.attrs = x_76813;
}
else {
L1: do {
var i_76832 = 0;
var colontmp__76854 = 0;
colontmp__76854 = ((n_76716.attrs != null ? n_76716.attrs.length : 0) - 2);
var res_76857 = 0;
L2: do {
L3: while (true) {
if (!(res_76857 <= colontmp__76854)) break L3;
i_76832 = res_76857;
if ((n_76716.attrs[i_76832] == key_76717)) {
n_76716.attrs[(i_76832 + 1)] = val_76718;
break BeforeRet;
}

res_76857 += 2;
}
} while(false);
} while(false);
if (n_76716.attrs != null) { n_76716.attrs.push(key_76717); } else { n_76716.attrs = [key_76717]; };
if (n_76716.attrs != null) { n_76716.attrs.push(val_76718); } else { n_76716.attrs = [val_76718]; };
}

} while (false); 
}
function addEventListener_77118(n_77120, event_77121, handler_77122) {

if (n_77120.events != null) { n_77120.events.push({Field0: event_77121, Field1: handler_77122}); } else { n_77120.events = [{Field0: event_77121, Field1: handler_77122}]; };
}
function key_89013(e_89015) {

var result_89016 = 0;
if ((e_89015.hasOwnProperty("karaxKey"))) {
result_89016 = e_89015.karaxKey;
}
else {
result_89016 = -1;
}

return result_89016;
}
function valueeq__76508(n_76510, v_76511) {

n_76510.text = v_76511;
}
function value_76504(n_76506) {

var result_76507 = null;
result_76507 = n_76506.text;
return result_76507;
}
function wrapEvent_89047(d_89049, n_89050, k_89051, action_89052) {

function laterWrapper_89078() {

function colonanonymous__89087(ev_89089) {

function wrapper_89090() {

valueeq__76508(n_89085, ev_89089.target.value);
action_89084(ev_89089, n_89085);
ev_89089.target.value = value_76504(n_89085);
}
if (!((timer_89086 == null))) {
clearTimeout(timer_89086);
}

timer_89086 = setTimeout(wrapper_89090, 400);
}
var result_89083 = null;
var action_89084 = action_89052;
var n_89085 = n_89050;
var timer_89086 = null;
result_89083 = colonanonymous__89087;
return result_89083;
}
function enterWrapper_89064() {

function colonanonymous__89072(ev_89074) {

if ((ev_89074.keyCode == 13)) {
valueeq__76508(n_89071, ev_89074.target.value);
action_89070(ev_89074, n_89071);
ev_89074.target.value = value_76504(n_89071);
}

}
var result_89069 = null;
var action_89070 = action_89052;
var n_89071 = n_89050;
result_89069 = colonanonymous__89072;
return result_89069;
}
function stdWrapper_89053() {

function colonanonymous__89061(ev_89063) {

action_89059(ev_89063, n_89060);
}
var result_89058 = null;
var action_89059 = action_89052;
var n_89060 = n_89050;
result_89058 = colonanonymous__89061;
return result_89058;
}
switch (k_89051) {
case 23: d_89049.addEventListener("keyup", laterWrapper_89078(), false);

break;
case 22: d_89049.addEventListener("keyup", enterWrapper_89064(), false);

break;
default: 
d_89049.addEventListener(toEventName_76455[k_89051], stdWrapper_89053(), false);
break;
}
}
function vnodeToDom_89120(n_89122) {

var result_89123 = null;
BeforeRet: do {
if ((n_89122.kind == 0)) {
result_89123 = document.createTextNode(n_89122.text);
n_89122.dom = result_89123;
}
else {
if ((n_89122.kind == 3)) {
var x_89152 = vcomponents_87126[0][n_89122.text](n_89122.kids);
result_89123 = vnodeToDom_89120(x_89152);
n_89122.key = key_89013(result_89123);
n_89122.dom = result_89123;
break BeforeRet;
}
else {
if ((n_89122.kind == 4)) {
result_89123 = dcomponents_87138[0][n_89122.text](n_89122.kids);
n_89122.key = key_89013(result_89123);
n_89122.dom = result_89123;
break BeforeRet;
}
else {
result_89123 = document.createElement(toTag_76449[n_89122.kind]);
n_89122.dom = result_89123;
L1: do {
var k_89172 = null;
L2: do {
var i_89425 = 0;
var colontmp__89427 = 0;
colontmp__89427 = (n_89122.kids != null ? n_89122.kids.length : 0);
var i_89429 = 0;
L3: do {
L4: while (true) {
if (!(i_89429 < colontmp__89427)) break L4;
i_89425 = i_89429;
k_89172 = n_89122.kids[i_89425];
result_89123.appendChild(vnodeToDom_89120(k_89172));
i_89429 += 1;
}
} while(false);
} while(false);
} while(false);
if (!((n_89122.text == null))) {
result_89123.value = n_89122.text;
}

}
}}
if (!((n_89122.id == null))) {
result_89123.id = n_89122.id;
}

if (!((n_89122.class == null))) {
result_89123.className = n_89122.class;
}

if ((0 <= n_89122.key)) {
result_89123.karaxKey = n_89122.key;
}

L5: do {
var k_89173 = null;
var v_89174 = null;
L6: do {
var i_89434 = 0;
var colontmp__89436 = 0;
colontmp__89436 = ((n_89122.attrs != null ? n_89122.attrs.length : 0) - 2);
var res_89438 = 0;
L7: do {
L8: while (true) {
if (!(res_89438 <= colontmp__89436)) break L8;
i_89434 = res_89438;
k_89173 = n_89122.attrs[i_89434];
v_89174 = n_89122.attrs[(i_89434 + 1)];
if (!((v_89174 == null))) {
result_89123.setAttribute(k_89173, v_89174);
}

res_89438 += 2;
}
} while(false);
} while(false);
} while(false);
L9: do {
var e_89402 = 0;
var h_89403 = null;
var colontmp__89442 = null;
colontmp__89442 = n_89122.events;
var i_89445 = 0;
var L_89447 = (colontmp__89442 != null ? colontmp__89442.length : 0);
L10: do {
L11: while (true) {
if (!(i_89445 < L_89447)) break L11;
e_89402 = colontmp__89442[i_89445]["Field0"];
h_89403 = colontmp__89442[i_89445]["Field1"];
wrapEvent_89047(result_89123, n_89122, e_89402, h_89403);
i_89445 += 1;
}
} while(false);
} while(false);
if (((n_89122 == toFocusV_89022[0]) && (toFocus_89021[0] === null))) {
toFocus_89021[0] = result_89123;
}

} while (false); 
return result_89123;
}
function replaceById_89484(id_89486, newTree_89487) {

var x_89488 = document.getElementById(id_89486);
x_89488.parentNode.replaceChild(newTree_89487, x_89488);
}
function len_76893(x_76895) {

var result_76896 = 0;
result_76896 = (x_76895.kids != null ? x_76895.kids.length : 0);
return result_76896;
}
function X5BX5D__76904(x_76906, idx_76907) {

var result_76908 = null;
result_76908 = x_76906.kids[idx_76907];
return result_76908;
}
function sameAttrs_77076(a_77078, b_77079) {

var result_77080 = false;
BeforeRet: do {
if (((a_77078.attrs != null ? a_77078.attrs.length : 0) == (b_77079.attrs != null ? b_77079.attrs.length : 0))) {
result_77080 = true;
L1: do {
var i_77111 = 0;
var colontmp__77113 = 0;
colontmp__77113 = (a_77078.attrs != null ? a_77078.attrs.length : 0);
var i_77116 = 0;
L2: do {
L3: while (true) {
if (!(i_77116 < colontmp__77113)) break L3;
i_77111 = i_77116;
if (!((a_77078.attrs[i_77111] == b_77079.attrs[i_77111]))) {
result_77080 = false;
break BeforeRet;
}

i_77116 += 1;
}
} while(false);
} while(false);
}

} while (false); 
return result_77080;
}
function equalsShallow_89489(a_89491, b_89492) {

var Tmp1;
var result_89493 = false;
BeforeRet: do {
if (!((a_89491.kind == b_89492.kind))) {
result_89493 = false;
break BeforeRet;
}

if (!((a_89491.id == b_89492.id))) {
result_89493 = false;
break BeforeRet;
}

if (!((a_89491.key == b_89492.key))) {
result_89493 = false;
break BeforeRet;
}

if ((a_89491.kind == 0)) {
if (!((a_89491.text == b_89492.text))) {
result_89493 = false;
break BeforeRet;
}

}
else {
if ((a_89491.kind == 3)) Tmp1 = true; else {Tmp1 = (a_89491.kind == 4); }if (Tmp1) {
if (!((a_89491.text == b_89492.text))) {
result_89493 = false;
break BeforeRet;
}

if (!((len_76893(a_89491) == len_76893(b_89492)))) {
result_89493 = false;
break BeforeRet;
}

L2: do {
var i_89538 = 0;
var colontmp__89540 = 0;
colontmp__89540 = len_76893(a_89491);
var i_89543 = 0;
L3: do {
L4: while (true) {
if (!(i_89543 < colontmp__89540)) break L4;
i_89538 = i_89543;
if (!(equalsShallow_89489(X5BX5D__76904(a_89491, i_89538), X5BX5D__76904(b_89492, i_89538)))) {
result_89493 = false;
break BeforeRet;
}

i_89543 += 1;
}
} while(false);
} while(false);
}
}
if (!(sameAttrs_77076(a_89491, b_89492))) {
result_89493 = false;
break BeforeRet;
}

if (!((a_89491.class == b_89492.class))) {
result_89493 = false;
break BeforeRet;
}

result_89493 = true;
break BeforeRet;
} while (false); 
return result_89493;
}
function eq_76618(a_76620, b_76621) {

var result_76622 = false;
BeforeRet: do {
if (!((a_76620.kind == b_76621.kind))) {
result_76622 = false;
break BeforeRet;
}

if (!((a_76620.id == b_76621.id))) {
result_76622 = false;
break BeforeRet;
}

if (!((a_76620.class == b_76621.class))) {
result_76622 = false;
break BeforeRet;
}

if (!((a_76620.key == b_76621.key))) {
result_76622 = false;
break BeforeRet;
}

if (!((a_76620.kind == 0))) {
if (!(((a_76620.kids != null ? a_76620.kids.length : 0) == (b_76621.kids != null ? b_76621.kids.length : 0)))) {
result_76622 = false;
break BeforeRet;
}

L1: do {
var i_76670 = 0;
var colontmp__76703 = 0;
colontmp__76703 = (a_76620.kids != null ? a_76620.kids.length : 0);
var i_76706 = 0;
L2: do {
L3: while (true) {
if (!(i_76706 < colontmp__76703)) break L3;
i_76670 = i_76706;
if (!(eq_76618(a_76620.kids[i_76670], b_76621.kids[i_76670]))) {
result_76622 = false;
break BeforeRet;
}

i_76706 += 1;
}
} while(false);
} while(false);
}

if (!((a_76620.text == b_76621.text))) {
result_76622 = false;
break BeforeRet;
}

if (!(((a_76620.attrs != null ? a_76620.attrs.length : 0) == (b_76621.attrs != null ? b_76621.attrs.length : 0)))) {
result_76622 = false;
break BeforeRet;
}

L4: do {
var i_76701 = 0;
var colontmp__76709 = 0;
colontmp__76709 = (a_76620.attrs != null ? a_76620.attrs.length : 0);
var i_76712 = 0;
L5: do {
L6: while (true) {
if (!(i_76712 < colontmp__76709)) break L6;
i_76701 = i_76712;
if (!((a_76620.attrs[i_76701] == b_76621.attrs[i_76701]))) {
result_76622 = false;
break BeforeRet;
}

i_76712 += 1;
}
} while(false);
} while(false);
result_76622 = true;
} while (false); 
return result_76622;
}
function equalsTree_89545(a_89547, b_89548) {

var result_89549 = false;
result_89549 = eq_76618(a_89547, b_89548);
return result_89549;
}
function setDomField_89663(a_89665, b_89666) {

a_89665.dom = b_89666.dom;
L1: do {
var i_89676 = 0;
var colontmp__89678 = 0;
colontmp__89678 = len_76893(a_89665);
var i_89681 = 0;
L2: do {
L3: while (true) {
if (!(i_89681 < colontmp__89678)) break L3;
i_89676 = i_89681;
setDomField_89663(X5BX5D__76904(a_89665, i_89676), X5BX5D__76904(b_89666, i_89676));
i_89681 += 1;
}
} while(false);
} while(false);
}
function updateElement_89683(parent_89685, current_89686, newNode_89687, oldNode_89688) {

var Tmp7;
var Tmp8;
newNode_89687.dom = oldNode_89688.dom;
if (!(equalsShallow_89489(newNode_89687, oldNode_89688))) {
oldNode_89688.dom = null;
var n_89689 = vnodeToDom_89120(newNode_89687);
if ((parent_89685 == null)) {
replaceById_89484("ROOT", n_89689);
}
else {
parent_89685.replaceChild(n_89689, current_89686);
}

}
else {
if (!((newNode_89687.kind == 0))) {
var newLength_89710 = len_76893(newNode_89687);
var oldLength_89711 = len_76893(oldNode_89688);
var left_90001 = 0;
var rightNew_90002 = (newLength_89710 - 1);
var rightOld_90003 = (oldLength_89711 - 1);
L1: do {
L2: while (true) {
if (!(left_90001 <= nimMin(rightNew_90002, rightOld_90003))) break L2;
var minRight_90004 = nimMin(rightOld_90003, rightNew_90002);
L3: do {
L4: while (true) {
if (!((left_90001 <= minRight_90004) && equalsTree_89545(X5BX5D__76904(newNode_89687, left_90001), X5BX5D__76904(oldNode_89688, left_90001)))) break L4;
setDomField_89663(X5BX5D__76904(newNode_89687, left_90001), X5BX5D__76904(oldNode_89688, left_90001));
left_90001 += 1;
}
} while(false);
L5: do {
L6: while (true) {
if (!(left_90001 < rightOld_90003)) Tmp8 = false; else {Tmp8 = (left_90001 < rightNew_90002); }if (!Tmp8) Tmp7 = false; else {Tmp7 = equalsTree_89545(X5BX5D__76904(newNode_89687, rightNew_90002), X5BX5D__76904(oldNode_89688, rightOld_90003)); }if (!Tmp7) break L6;
setDomField_89663(X5BX5D__76904(newNode_89687, rightNew_90002), X5BX5D__76904(oldNode_89688, rightOld_90003));
rightOld_90003 -= 1;
rightNew_90002 -= 1;
}
} while(false);
minRight_90004 = nimMin(rightOld_90003, rightNew_90002);
if ((left_90001 <= minRight_90004)) {
updateElement_89683(current_89686, X5BX5D__76904(oldNode_89688, left_90001).dom, X5BX5D__76904(newNode_89687, left_90001), X5BX5D__76904(oldNode_89688, left_90001));
left_90001 += 1;
}

if ((left_90001 < minRight_90004)) {
updateElement_89683(current_89686, X5BX5D__76904(oldNode_89688, rightOld_90003).dom, X5BX5D__76904(newNode_89687, rightNew_90002), X5BX5D__76904(oldNode_89688, rightOld_90003));
rightNew_90002 -= 1;
rightOld_90003 -= 1;
}

}
} while(false);
var posNextElem_90059 = (rightOld_90003 + 1);
var isPushBack_90060 = (posNextElem_90059 == oldLength_89711);
L9: do {
L10: while (true) {
if (!(left_90001 <= rightNew_90002)) break L10;
if (isPushBack_90060) {
current_89686.appendChild(vnodeToDom_89120(X5BX5D__76904(newNode_89687, left_90001)));
}
else {
current_89686.insertBefore(vnodeToDom_89120(X5BX5D__76904(newNode_89687, left_90001)), X5BX5D__76904(oldNode_89688, posNextElem_90059).dom);
}

left_90001 += 1;
}
} while(false);
L11: do {
var i_90079 = 0;
var res_90087 = left_90001;
L12: do {
L13: while (true) {
if (!(res_90087 <= rightOld_90003)) break L13;
i_90079 = res_90087;
current_89686.removeChild(X5BX5D__76904(oldNode_89688, i_90079).dom);
X5BX5D__76904(oldNode_89688, i_90079).dom = null;
res_90087 += 1;
}
} while(false);
} while(false);
}
}
}
function isDirty_87083(key_87085) {

var result_87086 = false;
result_87086 = dirty_87054[0].hasOwnProperty(key_87085);
return result_87086;
}
function unmarkDirty_87071(key_87073) {

delete dirty_87054[0][key_87073];
}
function updateDirtyElements_89601(parent_89603, current_89604, newNode_89605) {

var Tmp1;
var Tmp2;
var Tmp3;
if (!(0 <= newNode_89605.key)) Tmp1 = false; else {Tmp1 = isDirty_87083(newNode_89605.key); }if (Tmp1) {
unmarkDirty_87071(newNode_89605.key);
var n_89606 = vnodeToDom_89120(newNode_89605);
if ((parent_89603 == null)) {
replaceById_89484("ROOT", n_89606);
}
else {
parent_89603.replaceChild(n_89606, current_89604);
}

}
else {
if (!!((newNode_89605.kind == 0))) Tmp3 = false; else {Tmp3 = !((newNode_89605.kind == 3)); }if (!Tmp3) Tmp2 = false; else {Tmp2 = !((newNode_89605.kind == 4)); }if (Tmp2) {
L4: do {
var i_89654 = 0;
var colontmp__89656 = 0;
colontmp__89656 = (len_76893(newNode_89605) - 1);
var res_89659 = 0;
L5: do {
L6: while (true) {
if (!(res_89659 <= colontmp__89656)) break L6;
i_89654 = res_89659;
updateDirtyElements_89601(current_89604, current_89604.childNodes[i_89654], X5BX5D__76904(newNode_89605, i_89654));
res_89659 += 1;
}
} while(false);
} while(false);
}
}
}
function dodraw_90201() {

BeforeRet: do {
if ((dorender_89480[0] === null)) {
break BeforeRet;
}

var newtree_90209 = dorender_89480[0]();
newtree_90209.id = "ROOT";
toFocus_89021[0] = null;
if ((currentTree_89481[0] == null)) {
currentTree_89481[0] = newtree_90209;
var asdom_90221 = vnodeToDom_89120(currentTree_89481[0]);
replaceById_89484("ROOT", asdom_90221);
}
else {
var olddom_90222 = document.getElementById("ROOT");
updateElement_89683(null, olddom_90222, newtree_90209, currentTree_89481[0]);
if (someDirty_87055[0]) {
updateDirtyElements_89601(null, olddom_90222, newtree_90209);
someDirty_87055[0] = false;
}

currentTree_89481[0] = newtree_90209;
}

if (!((toFocus_89021[0] == null))) {
toFocus_89021[0].focus();
}

} while (false); 
}
function redraw_90239() {

window.requestAnimationFrame(dodraw_90201);
}
function addEventHandler_90418(n_90420, k_90421, action_90422) {

function wrapper_90423(ev_90425, n_90426) {

action_90422(ev_90425, n_90426);
redraw_90239();
}
addEventListener_77118(n_90420, k_90421, wrapper_90423);
}
function text_77012(s_77014) {

var result_77015 = null;
result_77015 = {kind: 0, text: s_77014, key: -1, id: null, class: null, kids: null, attrs: null, events: null, dom: null};
return result_77015;
}
function createTableCell_94091(id_94093) {

function tableCellClick_94095(ev_94098, n_94099) {

console.log(("Clicked" + id_94093));
}
var result_94094 = null;
var tmp_94112 = tree_76933(95, []);
tmp_94112.class = "TableCell";
addEventHandler_90418(tmp_94112, 0, tableCellClick_94095);
add_76914(tmp_94112, text_77012(id_94093));
result_94094 = tmp_94112;
return result_94094;
}
function createTableRow_94115(item_94117) {

var result_94118 = null;
var className_94119 = "TableRow";
if (item_94117.active) {
className_94119 = "TableRow active";
}

var tmp_94126 = tree_76933(94, []);
tmp_94126.class = className_94119;
setAttr_76714(tmp_94126, "data-id", ((item_94117.id)+''));
add_76914(tmp_94126, createTableCell_94091(("#" + ((item_94117.id)+''))));
L1: do {
var i_94143 = 0;
var colontmp__94146 = 0;
colontmp__94146 = (item_94117.props != null ? item_94117.props.length : 0);
var i_94149 = 0;
L2: do {
L3: while (true) {
if (!(i_94149 < colontmp__94146)) break L3;
i_94143 = i_94149;
add_76914(tmp_94126, createTableCell_94091(item_94117.props[i_94143]));
i_94149 += 1;
}
} while(false);
} while(false);
result_94118 = tmp_94126;
return result_94118;
}
function tableCreateVNode_94151(data_94153) {

var result_94154 = null;
var tmp_94162 = tree_76933(87, []);
tmp_94162.class = "Table";
var tmp_94168 = tree_76933(91, []);
L1: do {
var child_94402 = null;
var colontmp__94406 = null;
colontmp__94406 = data_94153.items;
var i_94409 = 0;
var L_94411 = (colontmp__94406 != null ? colontmp__94406.length : 0);
L2: do {
L3: while (true) {
if (!(i_94409 < L_94411)) break L3;
child_94402 = colontmp__94406[i_94409];
add_76914(tmp_94168, createTableRow_94115(child_94402));
i_94409 += 1;
}
} while(false);
} while(false);
add_76914(tmp_94162, tmp_94168);
result_94154 = tmp_94162;
return result_94154;
}
function createAnimBox_94412(item_94414) {

var result_94415 = null;
var time_94416 = item_94414.time;
var dataId_94417 = ((item_94414.id)+'');
var color_94420 = (Math.floor(time_94416 % 10) / 1.0000000000000000e+01);
var divStyles_94422 = (((("border-radius: " + ((Math.floor(time_94416 % 10))+'')) + "px; background: rgba(0,0,0,") + toJSStr(cstrToNimstr((color_94420)+""))) + ")");
var tmp_94429 = tree_76933(41, []);
tmp_94429.class = "AnimBox";
setAttr_76714(tmp_94429, "data-id", dataId_94417);
setAttr_76714(tmp_94429, "style", divStyles_94422);
result_94415 = tmp_94429;
return result_94415;
}
function animCreateVNode_94436(data_94438) {

var result_94439 = null;
var tmp_94446 = tree_76933(41, []);
tmp_94446.class = "Anim";
L1: do {
var child_94602 = null;
var colontmp__94605 = null;
colontmp__94605 = data_94438.items;
var i_94608 = 0;
var L_94610 = (colontmp__94605 != null ? colontmp__94605.length : 0);
L2: do {
L3: while (true) {
if (!(i_94608 < L_94610)) break L3;
child_94602 = colontmp__94605[i_94608];
add_76914(tmp_94446, createAnimBox_94412(child_94602));
i_94608 += 1;
}
} while(false);
} while(false);
result_94439 = tmp_94446;
return result_94439;
}
function createTreeLeaf_94611(data_94613) {

var result_94614 = null;
var tmp_94621 = tree_76933(35, []);
tmp_94621.class = "TreeLeaf";
add_76914(tmp_94621, text_77012(((data_94613.id)+'')));
result_94614 = tmp_94621;
return result_94614;
}
function createTreeNode_94623(data_94625) {

var result_94626 = null;
var tmp_94633 = tree_76933(34, []);
tmp_94633.class = "TreeNode";
L1: do {
var n_94802 = null;
var colontmp__94805 = null;
colontmp__94805 = data_94625.children;
var i_94808 = 0;
var L_94810 = (colontmp__94805 != null ? colontmp__94805.length : 0);
L2: do {
L3: while (true) {
if (!(i_94808 < L_94810)) break L3;
n_94802 = colontmp__94805[i_94808];
if (n_94802.container) {
add_76914(tmp_94633, createTreeNode_94623(n_94802));
}
else {
add_76914(tmp_94633, createTreeLeaf_94611(n_94802));
}

i_94808 += 1;
}
} while(false);
} while(false);
result_94626 = tmp_94633;
return result_94626;
}
function treeCreateVNode_94811(data_94813) {

var result_94814 = null;
var tmp_94821 = tree_76933(41, []);
tmp_94821.class = "Tree";
add_76914(tmp_94821, createTreeNode_94623(data_94813.root));
result_94814 = tmp_94821;
return result_94814;
}
function update_94823() {

var result_94825 = null;
var location_95001 = appState_94089[0].location;
var children_95002 = null;
if ((location_95001 == "table")) {
children_95002 = tableCreateVNode_94151(appState_94089[0].table);
}
else {
if ((location_95001 == "anim")) {
children_95002 = animCreateVNode_94436(appState_94089[0].anim);
}
else {
if ((location_95001 == "tree")) {
children_95002 = treeCreateVNode_94811(appState_94089[0].tree);
}
}}
var tmp_95009 = tree_76933(41, []);
tmp_95009.class = "Main";
add_76914(tmp_95009, children_95002);
result_94825 = tmp_95009;
return result_94825;
}
setRendererOnly_90411(update_94823);
function redrawForce_90401() {

dodraw_90201();
}
function a_95012(state_95014) {

appState_94089[0] = state_95014;
redrawForce_90401();
}
function b_95020(samples_95022) {

document.body.innerHTML = (("<pre>" + JSON.stringify(samples_95022, null, ' ')) + "</pre>");
}
uibench.run(a_95012, b_95020);
