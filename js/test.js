// testcode
// $("#gu_btn").css("color","red");

$(function(){
    $('#my-kabuto').jrumble();
    $('#my-kabuto').on({
        mouseener : function(){
            $(this).trigger('startRumble');
        },
        mouseleave : function(){
            $(this).trigger('stopRumble');
        }
    });
});




// グーをs選んだとき
$('#gu_btn').on('click',function(){
    // コンピューターの出した手
    // 1.乱数
    const pc = Math.floor(Math.random()*3);

    let pc_hand = '';
    let result = '';

    if(pc == 0){
        pc_hand = 'グー';
        result = 'あいこ';
    }else if(pc == 1){
        pc_hand = 'チョキ';
        result = '勝ち';
    }else if(pc == 2){
        pc_hand = 'パー';
        result = '負け';
    }

    // 2.表示処理
    $('#pc_hands').html(pc_hand);
    $('#judgement').html(result);

})


// チョキを選んだとき
$('#cho_btn').on('click',function(){
    // コンピューターの出した手
    // 1.乱数
    const pc = Math.floor(Math.random()*3);

    let pc_hand = '';
    let result = '';

    if(pc == 0){
        pc_hand = 'グー';
        result = '負け';
    }else if(pc == 1){
        pc_hand = 'チョキ';
        result = 'あいこ';
    }else if(pc == 2){
        pc_hand = 'パー';
        result = '勝ち';
    }
    

    // 2.表示処理
    // お互いの選択した手のサイズを一時的に大きくする
    $('#my_cho_img').css('width' ,'190px');
    setTimeout(function(){
        $('#my_cho_img').css('width' ,'150px');
    },2000)

    if(pc_hand == 'グー'){
        $('#pc_gu_img').css('width' ,'190px');
        setTimeout(function(){
            $('#pc_gu_img').css('width' ,'150px');
        },2000)
    }else if(pc_hand == 'チョキ'){
        $('#pc_cho_img').css('width' ,'190px');
        setTimeout(function(){
            $('#pc_cho_img').css('width' ,'150px');
        },2000)
    }else if(pc_hand == 'パー'){
        $('#pc_par_img').css('width' ,'190px');
        setTimeout(function(){
            $('#pc_par_img').css('width' ,'150px');
        },2000)
    };

    // $('#pc_hands').html(pc_hand);

    // 結果をそのあとでじわっと表示
    $('#judgement').html(result);

    // 勝った場合、自分のかぶとむしを動かして、相手にダメージ演出
    if(result == '勝ち'){
        $(function(){
            $('#my-kabuto').jrumble();
            $('#my-kabuto').trigger('startRumble');
        });
    };


})

// パーを選んだとき
$('#par_btn').on('click',function(){
    // コンピューターの出した手
    // 1.乱数
    const pc = Math.floor(Math.random()*3);

    let pc_hand = '';
    let result = '';

    if(pc == 0){
        pc_hand = 'グー';
        result = '勝ち';
    }else if(pc == 1){
        pc_hand = 'チョキ';
        result = '負け';
    }else if(pc == 2){
        pc_hand = 'パー';
        result = 'あいこ';
    }

    // 2.表示処理
    $('#pc_hands').html(pc_hand);
    $('#judgement').html(result);

})






