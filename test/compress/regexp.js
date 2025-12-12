regexp_simple: {
    input: {
        /rx/ig
    }
    expect_exact: "/rx/gi;"
}

regexp_slashes: {
    input: {
        /\\\/rx\/\\/ig
    }
    expect_exact: "/\\\\\\/rx\\/\\\\/gi;"
}

regexp_1: {
    options = {
    }
    input: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(/([Sap]+)/ig)));
    }
    expect: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(/([Sap]+)/gi)));
    }
    expect_stdout: '["PASS","pass"]'
}

regexp_2: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(new RegExp("(pass)", "ig"))));
    }
    expect: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(/(pass)/gi)));
    }
    expect_stdout: '["PASS","pass"]'
}

issue_CVE_2022_25858_1: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log(/(b+)+$/.test("b]"));
    }
    expect: {
        console.log(/(b+)+$/.test("b]"));
    }
    expect_stdout: "false"
}

issue_CVE_2022_25858_2: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log(new RegExp("(a+)+$").test("a"));
    }
    expect: {
        console.log(RegExp("(a+)+$").test("a"));
    }
    expect_stdout: "true"
}

issue_CVE_2022_25858_3: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log(/^foo$/.test("foo"));
    }
    expect: {
        console.log(true);
    }
    expect_stdout: "true"
}

issue_CVE_2022_25858_4: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        var re = new RegExp("foo");
    }
    expect: {
        var re = /foo/;
    }
}

issue_CVE_2022_25858_5: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log("test".match(/(a+)+$/));
    }
    expect: {
        console.log("test".match(/(a+)+$/));
    }
    expect_stdout: "null"
}
