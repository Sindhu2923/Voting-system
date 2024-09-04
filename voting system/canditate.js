function demo(a)
{
    let b=false;

    switch(a)
    {
        case '1':
           b= confirm("Are you confirm to Vote DMK");
            break;
            case '2':
                b= confirm("Are you confirm to Vote SEEMAAN");
                break;
                case '3':
                    b=  confirm("Are you confirm to Vote EPS");
                    break;
                    case '4':
                        b=   confirm("Are you confirm to Vote THALAPATHY VIJAY");
                        break;
                        case '5':
                            b=   confirm("Are you confirm to Vote BJP");
                            break;
                            case '6':
                                b=  confirm("Are you confirm to Vote KAMALAHASAN");
                                break;
                                case '7':
                                    b=    confirm("Are you confirm to Vote KALAINGAR");
                                    break;
                                    case '8':
                                        b=   confirm("Are you confirm to Vote AIADMK");
                                        break;
                                        case '9':
                                            b=    confirm("Are you confirm to Vote NARENDRA MODI");
                                            break;

    }
    if(b==true)
    {
        alert("You Are Successfully Voted THANKYOU!");
    }
}