webpackJsonp([3],{16:function(e,t){e.exports={tpl:function(e){var t="undefined"!=typeof _encodeHTML?_encodeHTML:function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},i=/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(i,function(e){return t[e]||e}):""}}();return'<div class="popup popup-confirm confirm2" style="height: '+e.height+"rem; z-index: "+e.zindex+';"> <div class="content"> <div class="content-title">'+t(e.title)+'</div> <div class="row"> <div class="col-50"><a href="javascript:;" class="close-popup button button-confirm">确 认</a></div> <div class="col-50"><a href="javascript:;" class="close-popup button button-cancel">取 消</a></div> </div> </div></div><style scoped> .popup-confirm { top: initial; bottom: 0; } .popup-confirm .content { text-align: center; color: #7b7f83; font-size: 0.7rem; font-weight: 400; } .popup-confirm .content-title { padding: 0.55rem; border-top: 1px solid #F0F0F0; } .popup-confirm .row { padding: 0 0.5rem; } .popup-confirm .button { font-size: 0.6rem; line-height: 1.5rem; font-weight: 400; height: 1.5rem; color: #ffffff; } .popup-confirm .button-confirm { border-radius: 6px; background-color: #25ae5f; border-color: #25ae5f; } .popup-confirm .button-cancel { border-radius: 6px; background-color: #ff9911; border-color: #ff9911; }</style>'},data:{title:"确认？",height:7.5,zindex:9},mixins:{show:function(){$.popup(".confirm2")},hide:function(){$.closeModal(".confirm2")}},events:{"click .button-confirm":"confirm","click .button-cancel":"cancel"},handle:{confirm:function(){this.trigger("confirm")},cancel:function(){this.trigger("cancel")}}}},19:function(e,t){e.exports={tpl:function(e){return'<div class="popup popup-confirm" id="cancelRasonPopup"> <div class="content"> <div class="content-title">请选择取消的原因</div> <div class="list-block media-list"> <ul> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="SALE_MAN_REASON"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">经纪人原因</div> </div> </div> </label> </li> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="CAMERAMAN_REASON"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">摄影师原因</div> </div> </div> </label> </li> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="OWNER_REASON"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">业主原因</div> </div> </div> </label> </li> <li class="note-li"> <div class="note-title">备注（必填）<span class="note-valid valid-normal" id="noteValidMsg"></span></div> <textarea class="note-textarea" id="noteTextarea"  placeholder="限 30 字"></textarea> </li> </ul> </div> <div class="row"> <div class="col-50"><a href="javascript:;" class="button button-confirm">确 认</a></div> <div class="col-50"><a href="javascript:;" class="button button-cancel">取 消</a></div> </div> </div></div><div class="modal-overlay"></div><style scoped> .popup-confirm { top: initial; bottom: 0; height: 16rem; z-index: 16; } .popup-confirm .content { text-align: center; color: #7b7f83; font-size: .7rem; font-weight: 400; } .popup-confirm .content-title { padding: .35rem; box-shadow: 0 1px 0 #dddddd; font-weight: 700; } .popup-confirm .row { padding: 0 .5rem; } .popup-confirm .button { font-size: .6rem; line-height: 1.5rem; font-weight: 400; height: 1.5rem; color: #ffffff; } .popup-confirm .button-confirm { border-radius: .3rem; background-color: #25ae5f; border-color: #25ae5f; } .popup-confirm .button-cancel { border-radius: .3rem; background-color: #ff9911; border-color: #ff9911; } .list-block .item-content { min-height: 1.6rem; padding-left: 1.5rem; }  .popup-confirm .item-inner { min-height: 1.6rem; line-height: 1.6rem; padding: 0; } .list-block.media-list { padding: .4rem 0; background: #efeff4; } .list-block ul:before, .list-block ul:after, .list-block .item-inner:after { content: initial; } .list-block ul { background: #efeff4; } .list-block .item-media+.item-inner { margin-left: .4rem; } .list-block.media-list .item-media { padding: 0; } .popup-confirm .item-title { font-size: .7rem; padding-top: .3rem; } label.label-checkbox input[type=checkbox]:checked+.item-media i.icon-form-checkbox, label.label-checkbox input[type=radio]:checked+.item-media i.icon-form-checkbox { background: #25ae5f; } label.label-checkbox i.icon-form-checkbox { width: .8rem; height: .8rem; border-radius: .8rem; } .row .col-50 { margin-top: .6rem; }  .modal-overlay { z-index: 15; display: none; } .modal-overlay-visible { display: block; } .note-li { padding: 0 1.5rem; } .note-title { padding: .2rem 0; padding-top: .4rem; font-size: .7rem; text-align: left; color: #a6a6a6; } .note-valid { color: #7b7f83; float: right; } .note-valid-error { color: #ff0000; } .note-textarea { font-size: .7rem; line-height: 1rem; height: 3rem; margin: 0 0 .3rem 0; background: #e0e0e0; border-radius: .15rem; padding: .3rem; }</style>'},mixins:{getValue:function(){return{cancelReason:this.$("input:checked").val(),cancelRemark:this.$("#noteTextarea").val().trim()}},show:function(){$.popup("#cancelRasonPopup"),this.$(".modal-overlay").addClass("modal-overlay-visible")},hide:function(){this.$(".modal-overlay").removeClass("modal-overlay-visible"),$.closeModal("#cancelRasonPopup")}},events:{"click .button-confirm":"confirm","click .button-cancel":"cancel","click .modal-overlay":"cancel","input #noteTextarea":"textareaHandle"},handle:{confirm:function(){var e=this.getValue();return e.cancelReason?e.cancelRemark.length?e.cancelRemark.length>30?$.toast("取消备注已超出字数限制"):void this.trigger("confirm"):$.toast("请填写取消备注"):$.toast("请选择取消原因")},cancel:function(){this.trigger("cancel"),this.hide()},textareaHandle:function(e){var t=$(e.target).val().trim().length;t>30?this.$("#noteValidMsg").addClass("note-valid-error").text("已超出 "+(t-30)+" 字"):this.$("#noteValidMsg").removeClass("note-valid-error").text("还可以输入 "+(30-t)+" 字")}}}},25:function(e,t){e.exports={tpl:function(e){return'<div class="popup popup-confirm popup2" style="height: 16rem; z-index: 16"> <div class="content"> <div class="content-title">您确定要拒绝此订单吗？</div> <div class="list-block media-list"> <ul> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="当前较忙，赶不及前往"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">当前较忙，赶不及前往</div> </div> </div> </label> </li> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="此时间段有待拍摄订单"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">此时间段有待拍摄订单</div> </div> </div> </label> </li> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="时间已约满"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">时间已约满</div> </div> </div> </label> </li> <li> <label class="label-checkbox item-content"> <input type="radio" name="cancelReason" value="其它原因"  id="otherReason"> <div class="item-media"><i class="icon icon-form-checkbox"></i></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">其它原因</div> <span class="note-valid valid-normal" id="noteValidMsg"></span> </div> </div> </label> </li> <li class="note-li"> <textarea class="note-textarea" id="noteTextarea" placeholder="限 30 字"></textarea> </li> </ul> </div> <div class="row"> <div class="col-50"><a href="javascript:;" class="button button-confirm">确 认</a></div> <div class="col-50"><a href="javascript:;" class="button button-cancel">取 消</a></div> </div> </div></div><div class="modal-overlay"></div><style scoped> .popup-confirm { top: initial; bottom: 0; } .popup-confirm .content { text-align: center; color: #7b7f83; font-size: 0.7rem; font-weight: 400; } .popup-confirm .content-title { padding: 0.35rem; box-shadow: 0 1px 0 #dddddd; font-weight: 700; } .popup-confirm .row { padding: 0 0.5rem; } .popup-confirm .button { font-size: 0.6rem; line-height: 1.5rem; font-weight: 400; height: 1.5rem; color: #ffffff; } .popup-confirm .button-confirm { border-radius: 6px; background-color: #25ae5f; border-color: #25ae5f; } .popup-confirm .button-cancel { border-radius: 6px; background-color: #ff9911; border-color: #ff9911; } .list-block .item-content { min-height: 1.6rem; padding-left: 1.5rem; }  .popup-confirm .item-inner { min-height: 1.6rem; line-height: 1.6rem; padding: 0; } .list-block.media-list { padding: 0.4rem 0; background: #efeff4; } .list-block ul:before, .list-block ul:after, .list-block .item-inner:after { content: initial; } .list-block ul { background: #efeff4; } .list-block .item-media+.item-inner { margin-left: 0.4rem; } .list-block.media-list .item-media { padding: 0; } .popup-confirm .item-title { font-size: 0.7rem; padding-top: 0.3rem; } label.label-checkbox input[type=checkbox]:checked+.item-media i.icon-form-checkbox, label.label-checkbox input[type=radio]:checked+.item-media i.icon-form-checkbox { background: #25ae5f; } label.label-checkbox i.icon-form-checkbox { width: 0.8rem; height: 0.8rem; border-radius: 0.8rem; } .row .col-50 { margin-top: 0.6rem; }  .modal-overlay { z-index: 15; display: none; } .modal-overlay-visible { display: block; } .note-li { padding: 0 1.5rem; } .note-title { padding: 0.2rem 0; padding-top: 0.4rem; font-size: 0.7rem; text-align: left; color: #a6a6a6; } .note-valid { color: #7b7f83; float: right; font-size: 0.7rem; margin-top: 0.3rem; margin-right: 1rem; } .note-valid-error { color: #ff0000; } .note-textarea { font-size: 0.7rem; line-height: 1rem; height: 3rem; margin: 0 0 0.3rem 0; background: #E0E0E0; border-radius: 3px; padding: 0.3rem; } </style>'},mixins:{getValue:function(){var e=this.$("input:checked").val();return"其它原因"===e?this.$("#noteTextarea").val().trim():e},show:function(){$.popup(".popup2"),this.$(".modal-overlay").addClass("modal-overlay-visible")},hide:function(){this.$(".modal-overlay").removeClass("modal-overlay-visible"),$.closeModal(".popup2")}},events:{"click .button-confirm":"confirm","click .button-cancel":"cancel","click .modal-overlay":"cancel","click #noteTextarea":"clickTextarea","input #noteTextarea":"textareaHandle",'change input[name="cancelReason"]':"toggleReason"},handle:{confirm:function(){this.trigger("confirm")},cancel:function(){this.trigger("cancel"),this.hide()},clickTextarea:function(){this.$('input[name="cancelReason"]').last().prop("checked",!0)},textareaHandle:function(e){var t=$(e.target),i=t.val().length;i>30?this.$("#noteValidMsg").addClass("note-valid-error").text("已超出 "+(i-30)+" 字"):this.$("#noteValidMsg").removeClass("note-valid-error").text("还可以输入 "+(30-i)+" 字")},toggleReason:function(e){var t=$(e.currentTarget),i=this.$("#noteTextarea");if("其它原因"===t.val())return i.focus();i.val("").blur(),this.$("#noteValidMsg").removeClass("note-valid-error").text("")}}}},8:function(e,t,i){var a=i(1),o=i(2);e.exports={tpl:function(e){var t="undefined"!=typeof _encodeHTML?_encodeHTML:function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},i=/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(i,function(e){return t[e]||e}):""}}(),i='<div class="page page-current"> <div class="content"> ';return"CAMERAMAN_CANCEL"===e.status?i+=' <div class="list-block order-status canceled"> <div class="item-content"> <div class="item-media"><i class="icon icon-error icon-border"></i></div> <div class="status-text"> 该订单已取消<br> <label>取消原因：</label><span>'+t(e.reason)+"（"+t(e.statusDesc)+"）</span> </div> </div> </div> ":"WAITING_SHOOT"===e.status?i+=' <div class="list-block order-status unshoot"> <div class="item-content item-link"> <div class="item-inner"> <div class="status-text"><span class="label">拍摄时间：</span><span class="date-label">'+t(e.beginShootTimeDetail.dayLabel)+'</span><span class="date">('+t(e.beginShootTimeDetail.month)+"月"+t(e.beginShootTimeDetail.day)+'日)</span> <span class="time">'+t(e.beginShootTimeDetail.hour+":"+(e.beginShootTimeDetail.minute||"00"))+"~"+t(e.endShootTimeDetail.hour+":"+(e.endShootTimeDetail.minute||"00"))+"</span></div> </div> </div> </div> ":"WAITING_ORDER"===e.status?(i+=" ",e.isConflictTime&&(i+=' <div class="list-block order-status"> <div class="item-content"> <div class="item-media"><i class="icon icon-warn"></i></div> <div class="status-text">该预约时间与您的订单 <span>'+e.conflictBills+"</span> 所设置的冻结时间冲突！</div> </div> </div> "),i+=" "):(i+=' <div class="list-block order-status uploaded"> <div class="item-content"> <div class="item-media"><i class="icon icon-border',"WAITING_UPLOAD"===e.status?i+=" icon-notice":"WAITING_AUDIT"===e.status||"FINISHED"===e.status?i+=" icon-hook":"AUDIT_NOT_PASS"===e.status&&(i+=" icon-error"),i+='" style="',"WAITING_UPLOAD"===e.status||"WAITING_AUDIT"===e.status?i+="color: #ff9911; border-color: #ff9911;":"AUDIT_NOT_PASS"===e.status?i+="color: #ff0000; border-color: #ff0000;":"FINISHED"===e.status&&(i+="color: #25ae5f; border-color: #25ae5f;"),i+='"></i></div> <div class="status-text" style="',"WAITING_UPLOAD"===e.status||"WAITING_AUDIT"===e.status?i+="color: #ff9911;":"AUDIT_NOT_PASS"===e.status?i+="color: #ff0000;":"FINISHED"===e.status&&(i+="color: #25ae5f;"),i+='">'+t(e.statusDesc)+'</div> </div> <div class="flow-content"> <div class="flows"> <div class="flow-item active',"WAITING_SHOOT"===e.status&&(i+=" current"),i+='"><i class="point"></i><label>预约拍摄</label><br><span>预拍时间：'+t(e.beginShootTimeDetail.year)+"年"+t(e.beginShootTimeDetail.month)+"月"+t(e.beginShootTimeDetail.day)+"日  "+t(e.beginShootTimeDetail.hour||"00")+":"+t(e.beginShootTimeDetail.minute||"00")+"~"+t(e.endShootTimeDetail.hour||"00")+":"+t(e.endShootTimeDetail.minute||"00")+'</span></div> <div class="flow-item active',"WAITING_UPLOAD"===e.status&&(i+=" current"),i+='"><i class="point"></i><label>完成拍摄</label><br><span>拍摄时间：'+t(e.finishedShootTimeDetail.year)+"年"+t(e.finishedShootTimeDetail.month)+"月"+t(e.finishedShootTimeDetail.day)+"日  "+t(e.finishedShootTimeDetail.hour||"00")+":"+t((e.finishedShootTimeDetail.minute+"").length<2?"0"+e.finishedShootTimeDetail.minute:e.finishedShootTimeDetail.minute||"00")+'</span></div> <div class="flow-item',e.uploadTime&&(i+=" active"),"WAITING_AUDIT"===e.status&&(i+=" current"),i+='"><i class="point"></i><label>上传图片</label><br>',e.uploadTime&&(i+="<span>上传时间："+t(e.uploadTimeDetail.year)+"年"+t(e.uploadTimeDetail.month)+"月"+t(e.uploadTimeDetail.day)+"日  "+t(e.uploadTimeDetail.hour||"00")+":"+t((e.uploadTimeDetail.minute+"").length<2?"0"+e.uploadTimeDetail.minute:e.uploadTimeDetail.minute||"00")+"</span>"),i+='</div> <div class="flow-item',e.auditTime&&(i+=" active"),"AUDIT_NOT_PASS"===e.status&&(i+=" current"),i+='"><i class="point"></i><label>审核图片</label><br>',e.auditTime&&(i+="<span>审核时间："+t(e.auditTimeDetail.year)+"年"+t(e.auditTimeDetail.month)+"月"+t(e.auditTimeDetail.day)+"日  "+t(e.auditTimeDetail.hour||"00")+":"+t((e.auditTimeDetail.minute+"").length<2?"0"+e.auditTimeDetail.minute:e.auditTimeDetail.minute||"00")+"</span>"),i+='</div> <div class="flow-item',"FINISHED"===e.status&&(i+=" active current"),i+='"><i class="point"></i><label>审核通过</label></div> </div> </div> </div> '),i+=' <div class="content-block order-info"> <div class="info-field"><label>预约时间：</label>'+t(e.appointmentTimeDetail.dayLabel)+" <label>("+t(e.appointmentTimeDetail.month)+"月"+t(e.appointmentTimeDetail.day)+"日)</label> <strong>"+t(e.appointmentTimeDetail.hour+":"+((e.appointmentTimeDetail.minute+"").length<2?"0"+e.appointmentTimeDetail.minute:e.appointmentTimeDetail.minute||"00"))+'</strong></div> <div class="info-field"><label>订单编号：</label>'+t(e.appointmentNo)+'</div> <div class="info-field flex"><label>预约房源：</label>'+t(e.gardenName+",")+" "+t(e.buildName?e.buildName+",":"")+" "+t(e.unitName?e.unitName+",":"")+" "+t(e.roomNumber)+'</div> <div class="info-field"><label>户型面积：</label>'+(e.bedRoom||"0")+"房"+(e.livingRoom||"0")+"厅"+(e.kitChen||"0")+"厨"+(e.bathRoom||"0")+"卫 "+t(e.direction)+" "+(e.buildArea||"0")+'m²</div> <div class="info-field flex"><label>预约备注：</label>'+t(e.descToCameraman)+"</div> </div> ",e.showLayout&&(i+=" \x3c!-- 户型图 --\x3e ",e.layoutUrl&&""!==e.layoutUrl?(i+=' <div class="list-block order-status layout"> <div class="item-content item-link js-layout-detail"> <div class="item-inner"> <div class="status-text">户型图</div> </div> </div> <div class="img-box js-layout-detail"> ',"已挂接"===e.uploadWayCn?i+=' <div class="process-state finish"> <span class="high-text">'+t(e.uploadWayCn)+"</span> </div> ":(i+=' <div class="process-state ',"APPROVED_OK"===e.approveStatusEn&&(i+="finish"),i+='"> '+t(e.uploadWayCn)+'： <span class="high-text">'+t(e.approveStatusCn)+"</span> </div> "),i+=' <img src="'+e.layoutUrl+'"> </div> </div> '):i+=' <div class="list-block order-status layout"> <div class="item-content item-link js-layout-set"> <div class="item-inner"> <div class="status-text">户型图</div> </div> </div> <div class="no-img"> <i class="icon icon-huizhi js-layout-set"></i> <a href="javascript:;" class="btn-set js-layout-set">设置户型图</a> </div> </div> ',i+=" \x3c!-- 户型图 结束 --\x3e "),i+=' <div class="list-block media-list agent-info"> <ul> <li class="item-content"> <div class="item-inner agent-title">预约经纪人</div> </li> <li class="item-content"> <div class="item-media"> ',e.headUrl?i+=' <img src="'+t(e.headUrl)+'"> ':i+=' <img src="assets/img/noavatar.gif"> ',i+=' </div> <div class="item-inner agent-text"> <div class="agent-name">'+t(e.appointmentName)+" <span>"+t(e.appointmentPhone)+'</span></div> <div class="agent-store">'+t(e.branchName)+'</div> </div> <div class="item-right"> <a class="icon icon-call" href="tel:'+e.appointmentPhone+'"></a> </div> </li> </ul> </div> <div class="list-block map-info"> <ul> <li class="item-content item-link" id="openMap"> <div class="item-inner"> <div class="map-text"><label>地址：</label>'+t(e.gardenAddress)+'</div> </div> </li> </ul> </div> <div class="detail-map-wrap"> ',"WAITING_ORDER"!==e.status&&(i+=' <div class="label-tip"> ',e.noMarkCoordinates>0?i+=' <div class="text">共 '+(e.sumBuildings||0)+' 个楼栋，还有 <span class="color-f91">'+e.noMarkCoordinates+'</span>个 楼栋未标注坐标</div> <a class="btn" id="btnLabel" href="javascript:;"><i class="icon iconfont icon-navigator"></i>去标注</a> ':(i+=' <div class="text">共 '+(e.sumBuildings||0)+" 个楼栋，坐标均已标注",e.markSure&&(i+="，但疑似有误"),i+='</div> <a class="btn" id="btnLabel" href="javascript:;"><i class="icon iconfont icon-navigator"></i>去修正</a> '),i+=" </div> "),i+=' <div id="detailMap" class="detail-map"></div> </div> </div> ',"WAITING_ORDER"===e.status||"WAITING_SHOOT"===e.status?i+=' <div class="bar bar-footer row"> <div class="col-50"><a id="accept" class="button button-big button-fill button-accept">'+("WAITING_ORDER"===e.status?"接 单":"完成拍摄")+'</a></div> <div class="col-50"><a id="reject" class="button button-big button-fill button-reject">'+("WAITING_ORDER"===e.status?"拒 单":"取消订单")+"</a></div> </div> ":"WAITING_UPLOAD"!==e.status&&"AUDIT_NOT_PASS"!==e.status||(i+=' <div class="bar bar-footer"> <a id="reject" class="button button-big button-fill button-reject button-lonely">取消订单</a> </div> '),i+=' <div id="popup"></div> <div id="popup2"></div> <div id="confirm"></div></div><style scoped> .list-block { margin: 0; } .content-block { margin: 0; padding: .5rem; } .list-block .item-content { padding: 0 .5rem; } .order-status .item-content { min-height: initial; -webkit-justify-content: flex-start; justify-content: flex-start; padding: .1rem .5rem; } .order-status, .order-info { background: #fff; margin-top: .5rem; } .order-status .icon-warn, .order-status .icon-border { font-size: .6rem; height: 1.1rem; line-height: 1.1rem; width: 1.1rem; border-radius: 50%; text-align: center; border: 1px solid #f00; color: #f00; margin-right: .5rem; } .order-status .status-text { font-size: .6rem; color: #666; line-height: .8rem; } .order-status .status-text span { color: #f91; } .order-status.canceled .status-text{ color: #f00; font-size: .7rem; } .order-status.canceled .status-text label{ color: #a6a6a6; font-size: .6rem; } .order-status.canceled .status-text span{ color: #2e2e2e; font-size: .6rem; } .order-status.unshoot .item-inner { background-size: .6rem; background-position: 100% center; min-height: 1.6rem; } .order-status.unshoot .item-inner:after { content: initial; } .order-status.unshoot .status-text { font-size: .7rem; } .order-status.unshoot .label { color: #a6a6a6; } .order-status.unshoot .date-label { color: #2e2e2e; } .order-status.unshoot .date { color: #a6a6a6; } .order-status.unshoot .time { color: #f91; font-weight: 700; } .order-info .info-field { font-size: .7rem; line-height: 1.4rem; color: #2e2e2e; } .order-info .info-field label { color: #a6a6a6; font-weight: 400; } .order-info .info-field.flex { display: -webkit-box; display: -webkit-flex; display: flex; } .order-info .info-field.flex label { width: 3.5rem; -webkit-flex-shrink: 0; flex-shrink: 0; } .order-info .info-field strong { color: #ff9911; font-weight: 700; } .agent-info { margin-top: .5rem; } .agent-text { padding: 1rem 0 0 .5rem; margin-left: 0; } .agent-title { color: #2e2e2e; font-size: 0.7rem; } .agent-info .item-media img { width: 3rem; height: 3rem; border-radius: 50%; } .agent-name { color: #2e2e2e; font-size: .7rem; line-height: 1rem; } .agent-name span { color: #666; } .agent-store { color: #a6a6a6; font-size: .6rem; line-height: 1rem; } .agent-info .icon-call { font-size: .85rem; height: 1.75rem; line-height: 1.75rem; width: 1.75rem; border-radius: 50%; text-align: center; border: 1px solid #25ae5f; color: #25ae5f; } .map-info { margin-top: .5rem; } .map-info .map-text { font-size: .6rem; color: #2e2e2e; } .map-info .map-text label { font-weight: 400; color: #a6a6a6; } .map-info .item-link .item-inner { background-size: .6rem; background-position: 100% center; } .bar-footer { padding: 0; background: #efeff4; height: 2rem; z-index: 15; } .bar-footer.row { margin-left: 0; } .bar-footer.row .col-50 { width: 50%; margin-left: 0; margin-top: -.3rem; } .bar-footer .button { height: 2rem; line-height: 2rem; border-radius: 0; color: #fff; font-size: .7rem; font-weight: 400; } .bar-footer .button-lonely { top: 0; } .button-accept { background-color: #25ae5f; } .button-reject { background-color: #f91; } .detail-map { height: 10rem; } .uploaded .status-text { color: #f00; font-size: .9rem; } .uploaded .item-content { border: 1px solid #f8f8f8; } .flow-content { margin-left: 2.5rem; padding: .5rem 0; color: #a6a6a6; font-size: .7rem; } .flows { border-left: .15rem solid #eee; padding-left: 1rem; } .flow-item { margin-bottom: .5rem; line-height: .8rem; height: 1.7rem; } .flow-item .point { position: relative; width: .7rem; height: .7rem; border: 1px solid #eee; background: #fff; border-radius: 50%; display: inline-block; top: 0; left: -1.45rem; } .flow-item.current label { color: #2e2e2e; } .flow-item.current span { color: #666; } .flow-item.active .point { background: #25ae5f; } .flow-item label { margin-left: -.75rem; position: relative; top: -.1rem; } .flow-item span { font-size: .6rem; } .flow-item:last-child { height: initial; } .flow-item:last-child .point{ vertical-align: bottom; } .flow-item:last-child label { top: 0; }  .detail-map-wrap { position: absolute; width: 100%; } .label-tip { position: absolute; top: 0; left: 0; z-index: 14; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-align-items: center; align-items: center; width: 100%; padding-top: 0.15rem; padding-bottom: 0.15rem; font-size: 0.6rem; color: #fff; background-color: rgba(31, 29, 17, .7); } .label-tip .text { -webkit-flex: 1; flex: 1; padding-left: 0.6rem; padding-right: 0.1rem; } .label-tip .color-f91 { color: #f91; } .label-tip .btn { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-justify-content: center; justify-content: center; width: 4rem; height: 1.2rem; line-height: 1.2rem; margin-right: 5px; text-align: center; background: #25ae5f; border-radius: 0.6rem; color: #fff; } .label-tip .btn .icon { font-size: 0.6rem; margin-right: 0.2rem; } .order-status.layout .item-inner { background-size: .6rem; background-position: 100% center; min-height: 1.6rem; } .order-status.layout .item-inner:after { content: initial; } .order-status.layout .status-text { font-size: .7rem; } .img-box { position: relative; display: -webkit-flex; display: flex; -webkit-align-items: center; -webkit-justify-content: center; align-items: center; justify-content: center; height: 7rem; padding: 0.3rem; border-top: 1px solid #EEE; } .img-box img { max-width: 100%; max-height: 100%; } .process-state { position: absolute; right: 0; bottom: 0; z-index: 2; height: 1.55rem; line-height: 1.55rem; padding-right: 0.375rem; padding-left: 0.375rem; color: #FDDEB5; font-size: 0.7rem; background-color: #F91; } .process-state.finish { background-color: #25AE5F; color: #BEFFDA; } .process-state:before,.process-state:after { position: absolute; left: -0.5rem; content: \'\'; font-size: 0; line-height: 0; border-color: #F91; border-style: dashed; border-left-style: solid; border-top-color: transparent; border-bottom-color: transparent; } .process-state.finish:before,.process-state.finish:after { border-color: #25AE5F; border-top-color: transparent; border-bottom-color: transparent; } .process-state:before { top: 0;  border-width: 0 0.5rem 0.725rem 0; } .process-state:after { bottom: 0; border-width: 0.725rem 0.5rem 0 0; } .high-text { font-size: 0.7rem; color: #FFF; } .no-img { display: -webkit-flex; display: flex; -webkit-align-items: center; -webkit-justify-content: center; -webkit-flex-direction: column; align-items: center; justify-content: center; flex-direction: column; height: 7rem; border-top: 1px solid #EEE; border-bottom: 2px solid #fff; background-color: #F0F0F0; } .no-img .icon { line-height: 1; font-size: 2.25rem; color: #25AE5F; } .no-img .btn-set { display: block; margin-top: 0.5rem; width: 5.625rem; height: 1.6rem; line-height: 1.6rem; border-radius: 0.75rem; color: #FFF; font-size: 0.7rem; text-align: center; background-color: #25AE5F; }</style>'},data:function(){return this.fetch()},mixins:{fetch:function(){var e=this;return $.ajax({data:{personId:a.personId,id:e.opts.id},url:o.apiUrl+"getDetailForCameraman"})},mountPopup:function(){"WAITING_ORDER"===this.data.status?(this.popup2=a.mount(i(25),this.es+" #popup2"),this.popup2.on("confirm",this.rejectConfirm.bind(this))):(this.confirm=a.component(i(16)),this.confirm.data={title:"是否确认已完成拍摄任务？",zindex:16,height:4.5},this.confirm.mount(this.es+" #confirm"),this.confirm.on("confirm",this.shootConfirm.bind(this)),this.popup=a.mount(i(19),this.es+" #popup"),this.popup.on("confirm",this.cancelConfirm.bind(this)))},rejectConfirm:function(){var e=this;$.showIndicator(),$.ajax({type:"POST",data:{personId:a.personId,id:e.opts.id,rejectReason:e.popup2.getValue()},url:o.apiUrl+"rejectAppointmentBill"}).done(function(t){$.hideIndicator(),"C0000"===t.code?(e.popup2.hide(),a.cr.back()):$.toast(t.msg)}).fail(function(e){$.hideIndicator(),$.toast("网络异常")})},cancelConfirm:function(){var e=this,t=this.popup.getValue();$.showIndicator(),$.ajax({type:"POST",data:{personId:a.personId,id:e.opts.id,cancelReason:t.cancelReason,cancelRemark:t.cancelRemark},url:o.apiUrl+"cancelBillForCameraman"}).done(function(t){$.hideIndicator(),"C0000"===t.code?(e.popup.hide(),a.cr.back()):$.toast(t.msg)}).fail(function(e){$.hideIndicator(),$.toast("网络异常")})},shootConfirm:function(){var e=this;$.showIndicator(),$.ajax({type:"POST",data:{personId:a.personId,id:e.opts.id},url:o.apiUrl+"finishShoot"}).done(function(e){$.hideIndicator(),"C0000"===e.code?a.cr.back():$.toast(e.msg)}).fail(function(e){$.hideIndicator(),$.toast("网络异常")})},renderMap:function(){this.bMap=o.initMap({el:"detailMap",lng:this.data.gardenLongitude,lat:this.data.gardenLatitude,level:13});var e=new BMap.Marker({lng:this.data.gardenLongitude,lat:this.data.gardenLatitude});this.bMap.addOverlay(e),e.disableDragging()},goForm:function(){a.curOrder={status:this.data.status,id:this.data.id},a.cr.go("/form")}},listen:{mount:function(){a.setTitle(this.data.gardenName||"实勘详情"),this.mountPopup(),this.renderMap()},update:function(){if(this.data.resource){if("C0000"!==this.data.resource.code)return $.toast(this.data.resource.msg),a.cr.back();this.data=this.data.resource.data}switch(this.data.layoutUrl&&(this.data.layoutUrl=o.repaceImgUrl(this.data.layoutUrl,"400x300")),this.data.status){case"WAITING_UPLOAD":this.data.statusDesc="已完成拍摄，请及时上传图片";break;case"WAITING_AUDIT":this.data.statusDesc="已上传图片，等待审核中";break;case"AUDIT_NOT_PASS":this.data.statusDesc="审核不通过，请重新上传图片";break;case"FINISHED":this.data.statusDesc="恭喜你，已完成该订单"}}},events:{"click #accept":"accept","click #reject":"reject","click .unshoot .item-link":"setShootDate","click #openMap":"openMap","click #btnLabel":"goLabel","click .js-layout-set":"layoutSet","click .js-layout-detail":"layoutDetail"},handle:{accept:function(){var e=this;"WAITING_SHOOT"===this.data.status?this.confirm.show():"WAITING_ORDER"===this.data.status&&($.showIndicator(),$.ajax({data:{personId:a.personId,id:e.opts.id},url:o.apiUrl+"isReceiveBill"}).done(function(t){$.hideIndicator(),"C0000"===t.code?e.goForm():($.toast(t.msg),setTimeout(a.cr.back,1e3))}))},reject:function(){"WAITING_ORDER"===this.data.status?this.popup2.show():this.popup.show()},setShootDate:function(){this.goForm()},openMap:function(){a._address={address:this.data.gardenAddress,lng:this.data.gardenLongitude,lat:this.data.gardenLatitude},a.cr.go("/address")},goLabel:function(){a.gardenCoordinate={lng:this.data.gardenLongitude,lat:this.data.gardenLatitude,id:this.data.gardenId},a.cr.go("/label")},layoutSet:function(){a.surveyDetailData=this.data,a.cr.go("/layout-set")},layoutDetail:function(){a.surveyDetailData=this.data,a.cr.go("/layout-detail")}}}}});