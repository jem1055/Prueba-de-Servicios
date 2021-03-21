"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//Setting
_app["default"].set("port", process.env.PORT || 4000);

_app["default"].set("Json spaces", 2); //Server Port

_app["default"].listen(_app["default"].get("port"), function () {
  return console.log("Servicio esta en el port " + _app["default"].get("port"));
});
