const sbpLookUp: {
    [key: string]: number;
  } = {

    "Male-1-70": -0.5,
    "Male-1-71": -0.5,
    "Male-1-72": -0.5,
    "Male-1-73": -0.5,
    "Male-1-74": -0.5,
    "Male-1-75": -0.5,
    "Male-1-76": -0.5,
    "Male-1-77": -0.5,
    "Male-1-78": -0.5,
    "Male-1-79": -0.5,
    "Male-1-80": -0.5,
    "Male-1-81": -0.5,
    "Male-1-82": -0.5,
    "Male-1-83": -0.5,
    "Male-1-84": -0.5,
    "Male-1-85": -0.5,
    "Male-1-86": -0.5,
    "Male-1-87": -0.5,
    "Male-1-88": -0.5,
    "Male-1-89": -0.5,
    "Male-1-90": -0.5,
    "Male-1-91": -0.5,
    "Male-1-92": -0.5,
    "Male-1-93": -0.5,
    "Male-1-94": -0.5,
    "Male-1-95": -0.5,
    "Male-1-96": -0.5,
    "Male-1-97": -0.5,
    "Male-1-98": -0.5,
    "Male-1-99": -0.5,
    "Male-1-100": -0.5,
    "Male-1-101": -0.5,
    "Male-1-102": -0.5,
    "Male-1-103": -0.5,
    "Male-1-104": -0.5,
    "Male-1-105": -0.5,
    "Male-1-106": -0.5,
    "Male-1-107": -0.5,
    "Male-1-108": -0.5,
    "Male-1-109": -0.5,
    "Male-1-110": -0.5,
    "Male-1-111": -0.5,
    "Male-1-112": -0.5,
    "Male-1-113": -0.5,
    "Male-1-114": -0.5,
    "Male-1-115": -0.5,
    "Male-1-116": -0.5,
    "Male-1-117": -0.5,
    "Male-1-118": -0.5,
    "Male-1-119": -0.5,
    "Male-1-120": 0,
    "Male-1-121": 0,
    "Male-1-122": 0,
    "Male-1-123": 0,
    "Male-1-124": 0,
    "Male-1-125": 0,
    "Male-1-126": 0,
    "Male-1-127": 0,
    "Male-1-128": 0,
    "Male-1-129": 0,
    "Male-1-130": 0,
    "Male-1-131": 0,
    "Male-1-132": 0,
    "Male-1-133": 0,
    "Male-1-134": 0,
    "Male-1-135": 0,
    "Male-1-136": 0,
    "Male-1-137": 0,
    "Male-1-138": 0,
    "Male-1-139": 0,
    "Male-1-140": 0.5,
    "Male-1-141": 0.5,
    "Male-1-142": 0.5,
    "Male-1-143": 0.5,
    "Male-1-144": 0.5,
    "Male-1-145": 0.5,
    "Male-1-146": 0.5,
    "Male-1-147": 0.5,
    "Male-1-148": 0.5,
    "Male-1-149": 0.5,
    "Male-1-150": 0.5,
    "Male-1-151": 0.5,
    "Male-1-152": 0.5,
    "Male-1-153": 0.5,
    "Male-1-154": 0.5,
    "Male-1-155": 0.5,
    "Male-1-156": 0.5,
    "Male-1-157": 0.5,
    "Male-1-158": 0.5,
    "Male-1-159": 0.5,
    "Male-1-160": 1,
    "Male-1-161": 1,
    "Male-1-162": 1,
    "Male-1-163": 1,
    "Male-1-164": 1,
    "Male-1-165": 1,
    "Male-1-166": 1,
    "Male-1-167": 1,
    "Male-1-168": 1,
    "Male-1-169": 1,
    "Male-1-170": 1.5,
    "Male-1-171": 1.5,
    "Male-1-172": 1.5,
    "Male-1-173": 1.5,
    "Male-1-174": 1.5,
    "Male-1-175": 1.5,
    "Male-1-176": 1.5,
    "Male-1-177": 1.5,
    "Male-1-178": 1.5,
    "Male-1-179": 1.5,
    "Male-1-180": 2.5,
    "Male-1-181": 2.5,
    "Male-1-182": 2.5,
    "Male-1-183": 2.5,
    "Male-1-184": 2.5,
    "Male-1-185": 2.5,
    "Male-1-186": 2.5,
    "Male-1-187": 2.5,
    "Male-1-188": 2.5,
    "Male-1-189": 2.5,
    "Male-1-190": 2.5,
    "Male-1-191": 2.5,
    "Male-1-192": 2.5,
    "Male-1-193": 2.5,
    "Male-1-194": 2.5,
    "Male-1-195": 2.5,
    "Male-1-196": 2.5,
    "Male-1-197": 2.5,
    "Male-1-198": 2.5,
    "Male-1-199": 2.5,
    "Male-1-200": 2.5,
    "Male-1-201": 2.5,
    "Male-1-202": 2.5,
    "Male-1-203": 2.5,
    "Male-1-204": 2.5,
    "Male-1-205": 2.5,
    "Male-1-206": 2.5,
    "Male-1-207": 2.5,
    "Male-1-208": 2.5,
    "Male-1-209": 2.5,
    "Male-1-210": 3,
    "Male-1-211": 3,
    "Male-1-212": 3,
    "Male-1-213": 3,
    "Male-1-214": 3,
    "Male-1-215": 3,
    "Male-1-216": 3,
    "Male-1-217": 3,
    "Male-1-218": 3,
    "Male-1-219": 3,
    "Male-1-220": 3,
    "Male-1-221": 3,
    "Male-1-222": 3,
    "Male-1-223": 3,
    "Male-1-224": 3,
    "Male-1-225": 3,
    "Male-1-226": 3,
    "Male-1-227": 3,
    "Male-1-228": 3,
    "Male-2-70": -0.5,
    "Male-2-71": -0.5,
    "Male-2-72": -0.5,
    "Male-2-73": -0.5,
    "Male-2-74": -0.5,
    "Male-2-75": -0.5,
    "Male-2-76": -0.5,
    "Male-2-77": -0.5,
    "Male-2-78": -0.5,
    "Male-2-79": -0.5,
    "Male-2-80": -0.5,
    "Male-2-81": -0.5,
    "Male-2-82": -0.5,
    "Male-2-83": -0.5,
    "Male-2-84": -0.5,
    "Male-2-85": -0.5,
    "Male-2-86": -0.5,
    "Male-2-87": -0.5,
    "Male-2-88": -0.5,
    "Male-2-89": -0.5,
    "Male-2-90": -0.5,
    "Male-2-91": -0.5,
    "Male-2-92": -0.5,
    "Male-2-93": -0.5,
    "Male-2-94": -0.5,
    "Male-2-95": -0.5,
    "Male-2-96": -0.5,
    "Male-2-97": -0.5,
    "Male-2-98": -0.5,
    "Male-2-99": -0.5,
    "Male-2-100": -0.5,
    "Male-2-101": -0.5,
    "Male-2-102": -0.5,
    "Male-2-103": -0.5,
    "Male-2-104": -0.5,
    "Male-2-105": -0.5,
    "Male-2-106": -0.5,
    "Male-2-107": -0.5,
    "Male-2-108": -0.5,
    "Male-2-109": -0.5,
    "Male-2-110": -0.5,
    "Male-2-111": -0.5,
    "Male-2-112": -0.5,
    "Male-2-113": -0.5,
    "Male-2-114": -0.5,
    "Male-2-115": -0.5,
    "Male-2-116": 0,
    "Male-2-117": 0,
    "Male-2-118": 0,
    "Male-2-119": 0,
    "Male-2-120": 0,
    "Male-2-121": 0,
    "Male-2-122": 0,
    "Male-2-123": 0,
    "Male-2-124": 0,
    "Male-2-125": 0,
    "Male-2-126": 0.5,
    "Male-2-127": 0.5,
    "Male-2-128": 0.5,
    "Male-2-129": 0.5,
    "Male-2-130": 0.5,
    "Male-2-131": 0.5,
    "Male-2-132": 0.5,
    "Male-2-133": 0.5,
    "Male-2-134": 0.5,
    "Male-2-135": 0.5,
    "Male-2-136": 0.5,
    "Male-2-137": 0.5,
    "Male-2-138": 0.5,
    "Male-2-139": 0.5,
    "Male-2-140": 1,
    "Male-2-141": 1,
    "Male-2-142": 1,
    "Male-2-143": 1,
    "Male-2-144": 1,
    "Male-2-145": 1,
    "Male-2-146": 1,
    "Male-2-147": 1,
    "Male-2-148": 1,
    "Male-2-149": 1,
    "Male-2-150": 1,
    "Male-2-151": 1,
    "Male-2-152": 1,
    "Male-2-153": 1,
    "Male-2-154": 1,
    "Male-2-155": 1.5,
    "Male-2-156": 1.5,
    "Male-2-157": 1.5,
    "Male-2-158": 1.5,
    "Male-2-159": 1.5,
    "Male-2-160": 1.5,
    "Male-2-161": 1.5,
    "Male-2-162": 1.5,
    "Male-2-163": 1.5,
    "Male-2-164": 1.5,
    "Male-2-165": 1.5,
    "Male-2-166": 1.5,
    "Male-2-167": 1.5,
    "Male-2-168": 1.5,
    "Male-2-169": 1.5,
    "Male-2-170": 2,
    "Male-2-171": 2,
    "Male-2-172": 2,
    "Male-2-173": 2,
    "Male-2-174": 2,
    "Male-2-175": 2,
    "Male-2-176": 2,
    "Male-2-177": 2,
    "Male-2-178": 2,
    "Male-2-179": 2,
    "Male-2-180": 2.5,
    "Male-2-181": 2.5,
    "Male-2-182": 2.5,
    "Male-2-183": 2.5,
    "Male-2-184": 2.5,
    "Male-2-185": 2.5,
    "Male-2-186": 2.5,
    "Male-2-187": 2.5,
    "Male-2-188": 2.5,
    "Male-2-189": 2.5,
    "Male-2-190": 3,
    "Male-2-191": 3,
    "Male-2-192": 3,
    "Male-2-193": 3,
    "Male-2-194": 3,
    "Male-2-195": 3,
    "Male-2-196": 3,
    "Male-2-197": 3,
    "Male-2-198": 3,
    "Male-2-199": 3,
    "Male-2-200": 4,
    "Male-2-201": 4,
    "Male-2-202": 4,
    "Male-2-203": 4,
    "Male-2-204": 4,
    "Male-2-205": 4,
    "Male-2-206": 4,
    "Male-2-207": 4,
    "Male-2-208": 4,
    "Male-2-209": 4,
    "Male-2-210": 4,
    "Male-2-211": 4,
    "Male-2-212": 4,
    "Male-2-213": 4,
    "Male-2-214": 4,
    "Male-2-215": 4,
    "Male-2-216": 4,
    "Male-2-217": 4,
    "Male-2-218": 4,
    "Male-2-219": 4,
    "Male-2-220": 4,
    "Male-2-221": 4,
    "Male-2-222": 4,
    "Male-2-223": 4,
    "Male-2-224": 4,
    "Male-2-225": 4,
    "Male-2-226": 4,
    "Male-2-227": 4,
    "Male-2-228": 4,
    "Male-3-70": 0,
    "Male-3-71": 0,
    "Male-3-72": 0,
    "Male-3-73": 0,
    "Male-3-74": 0,
    "Male-3-75": 0,
    "Male-3-76": 0,
    "Male-3-77": 0,
    "Male-3-78": 0,
    "Male-3-79": 0,
    "Male-3-80": 0,
    "Male-3-81": 0,
    "Male-3-82": 0,
    "Male-3-83": 0,
    "Male-3-84": 0,
    "Male-3-85": 0,
    "Male-3-86": 0,
    "Male-3-87": 0,
    "Male-3-88": 0,
    "Male-3-89": 0,
    "Male-3-90": 0,
    "Male-3-91": 0,
    "Male-3-92": 0,
    "Male-3-93": 0,
    "Male-3-94": 0,
    "Male-3-95": 0,
    "Male-3-96": 0,
    "Male-3-97": 0,
    "Male-3-98": 0,
    "Male-3-99": 0,
    "Male-3-100": 0,
    "Male-3-101": 0,
    "Male-3-102": 0,
    "Male-3-103": 0,
    "Male-3-104": 0,
    "Male-3-105": 0,
    "Male-3-106": 0,
    "Male-3-107": 0,
    "Male-3-108": 0,
    "Male-3-109": 0,
    "Male-3-110": 0,
    "Male-3-111": 0,
    "Male-3-112": 0,
    "Male-3-113": 0,
    "Male-3-114": 0,
    "Male-3-115": 0,
    "Male-3-116": 0,
    "Male-3-117": 0,
    "Male-3-118": 0,
    "Male-3-119": 0,
    "Male-3-120": 0,
    "Male-3-121": 0,
    "Male-3-122": 0,
    "Male-3-123": 0,
    "Male-3-124": 0,
    "Male-3-125": 0,
    "Male-3-126": 0,
    "Male-3-127": 0,
    "Male-3-128": 0,
    "Male-3-129": 0,
    "Male-3-130": 0.5,
    "Male-3-131": 0.5,
    "Male-3-132": 0.5,
    "Male-3-133": 0.5,
    "Male-3-134": 0.5,
    "Male-3-135": 0.5,
    "Male-3-136": 0.5,
    "Male-3-137": 0.5,
    "Male-3-138": 0.5,
    "Male-3-139": 0.5,
    "Male-3-140": 1,
    "Male-3-141": 1,
    "Male-3-142": 1,
    "Male-3-143": 1,
    "Male-3-144": 1,
    "Male-3-145": 1,
    "Male-3-146": 1,
    "Male-3-147": 1,
    "Male-3-148": 1,
    "Male-3-149": 1,
    "Male-3-150": 1,
    "Male-3-151": 1,
    "Male-3-152": 1,
    "Male-3-153": 1,
    "Male-3-154": 1,
    "Male-3-155": 1.5,
    "Male-3-156": 1.5,
    "Male-3-157": 1.5,
    "Male-3-158": 1.5,
    "Male-3-159": 1.5,
    "Male-3-160": 1.5,
    "Male-3-161": 1.5,
    "Male-3-162": 1.5,
    "Male-3-163": 1.5,
    "Male-3-164": 1.5,
    "Male-3-165": 2,
    "Male-3-166": 2,
    "Male-3-167": 2,
    "Male-3-168": 2,
    "Male-3-169": 2,
    "Male-3-170": 2,
    "Male-3-171": 2,
    "Male-3-172": 2,
    "Male-3-173": 2,
    "Male-3-174": 2,
    "Male-3-175": 2.5,
    "Male-3-176": 2.5,
    "Male-3-177": 2.5,
    "Male-3-178": 2.5,
    "Male-3-179": 2.5,
    "Male-3-180": 3,
    "Male-3-181": 3,
    "Male-3-182": 3,
    "Male-3-183": 3,
    "Male-3-184": 3,
    "Male-3-185": 3,
    "Male-3-186": 3,
    "Male-3-187": 3,
    "Male-3-188": 3,
    "Male-3-189": 3,
    "Male-3-190": 3,
    "Male-3-191": 3,
    "Male-3-192": 3,
    "Male-3-193": 3,
    "Male-3-194": 3,
    "Male-3-195": 3,
    "Male-3-196": 3,
    "Male-3-197": 3,
    "Male-3-198": 3,
    "Male-3-199": 3,
    "Male-3-200": 4,
    "Male-3-201": 4,
    "Male-3-202": 4,
    "Male-3-203": 4,
    "Male-3-204": 4,
    "Male-3-205": 4,
    "Male-3-206": 4,
    "Male-3-207": 4,
    "Male-3-208": 4,
    "Male-3-209": 4,
    "Male-3-210": 4,
    "Male-3-211": 4,
    "Male-3-212": 4,
    "Male-3-213": 4,
    "Male-3-214": 4,
    "Male-3-215": 4,
    "Male-3-216": 4,
    "Male-3-217": 4,
    "Male-3-218": 4,
    "Male-3-219": 4,
    "Male-3-220": 4,
    "Male-3-221": 4,
    "Male-3-222": 4,
    "Male-3-223": 4,
    "Male-3-224": 4,
    "Male-3-225": 4,
    "Male-3-226": 4,
    "Male-3-227": 4,
    "Male-3-228": 4,
    "Female-4-70": -0.5,
    "Female-4-71": -0.5,
    "Female-4-72": -0.5,
    "Female-4-73": -0.5,
    "Female-4-74": -0.5,
    "Female-4-75": -0.5,
    "Female-4-76": -0.5,
    "Female-4-77": -0.5,
    "Female-4-78": -0.5,
    "Female-4-79": -0.5,
    "Female-4-80": -0.5,
    "Female-4-81": -0.5,
    "Female-4-82": -0.5,
    "Female-4-83": -0.5,
    "Female-4-84": -0.5,
    "Female-4-85": -0.5,
    "Female-4-86": -0.5,
    "Female-4-87": -0.5,
    "Female-4-88": -0.5,
    "Female-4-89": -0.5,
    "Female-4-90": -0.5,
    "Female-4-91": -0.5,
    "Female-4-92": -0.5,
    "Female-4-93": -0.5,
    "Female-4-94": -0.5,
    "Female-4-95": -0.5,
    "Female-4-96": -0.5,
    "Female-4-97": -0.5,
    "Female-4-98": -0.5,
    "Female-4-99": -0.5,
    "Female-4-100": -0.5,
    "Female-4-101": -0.5,
    "Female-4-102": -0.5,
    "Female-4-103": -0.5,
    "Female-4-104": -0.5,
    "Female-4-105": -0.5,
    "Female-4-106": -0.5,
    "Female-4-107": -0.5,
    "Female-4-108": -0.5,
    "Female-4-109": -0.5,
    "Female-4-110": -0.5,
    "Female-4-111": -0.5,
    "Female-4-112": -0.5,
    "Female-4-113": -0.5,
    "Female-4-114": -0.5,
    "Female-4-115": -0.5,
    "Female-4-116": -0.5,
    "Female-4-117": -0.5,
    "Female-4-118": -0.5,
    "Female-4-119": -0.5,
    "Female-4-120": 0,
    "Female-4-121": 0,
    "Female-4-122": 0,
    "Female-4-123": 0,
    "Female-4-124": 0,
    "Female-4-125": 0,
    "Female-4-126": 0,
    "Female-4-127": 0,
    "Female-4-128": 0,
    "Female-4-129": 0,
    "Female-4-130": 0.5,
    "Female-4-131": 0.5,
    "Female-4-132": 0.5,
    "Female-4-133": 0.5,
    "Female-4-134": 0.5,
    "Female-4-135": 0.5,
    "Female-4-136": 0.5,
    "Female-4-137": 0.5,
    "Female-4-138": 0.5,
    "Female-4-139": 0.5,
    "Female-4-140": 1,
    "Female-4-141": 1,
    "Female-4-142": 1,
    "Female-4-143": 1,
    "Female-4-144": 1,
    "Female-4-145": 1,
    "Female-4-146": 1,
    "Female-4-147": 1,
    "Female-4-148": 1,
    "Female-4-149": 1,
    "Female-4-150": 1.5,
    "Female-4-151": 1.5,
    "Female-4-152": 1.5,
    "Female-4-153": 1.5,
    "Female-4-154": 1.5,
    "Female-4-155": 1.5,
    "Female-4-156": 1.5,
    "Female-4-157": 1.5,
    "Female-4-158": 1.5,
    "Female-4-159": 1.5,
    "Female-4-160": 2,
    "Female-4-161": 2,
    "Female-4-162": 2,
    "Female-4-163": 2,
    "Female-4-164": 2,
    "Female-4-165": 2,
    "Female-4-166": 2,
    "Female-4-167": 2,
    "Female-4-168": 2,
    "Female-4-169": 2,
    "Female-4-170": 2,
    "Female-4-171": 2,
    "Female-4-172": 2,
    "Female-4-173": 2,
    "Female-4-174": 2,
    "Female-4-175": 2,
    "Female-4-176": 2,
    "Female-4-177": 2,
    "Female-4-178": 2,
    "Female-4-179": 2,
    "Female-4-180": 3,
    "Female-4-181": 2,
    "Female-4-182": 2,
    "Female-4-183": 2,
    "Female-4-184": 2,
    "Female-4-185": 2,
    "Female-4-186": 2,
    "Female-4-187": 2,
    "Female-4-188": 2,
    "Female-4-189": 2,
    "Female-4-190": 2,
    "Female-4-191": 2,
    "Female-4-192": 2,
    "Female-4-193": 2,
    "Female-4-194": 2,
    "Female-4-195": 2,
    "Female-4-196": 2,
    "Female-4-197": 2,
    "Female-4-198": 2,
    "Female-4-199": 2,
    "Female-4-200": 2,
    "Female-4-201": 2,
    "Female-4-202": 2,
    "Female-4-203": 2,
    "Female-4-204": 2,
    "Female-4-205": 2,
    "Female-4-206": 2,
    "Female-4-207": 2,
    "Female-4-208": 2,
    "Female-4-209": 2,
    "Female-4-210": 3,
    "Female-4-211": 3,
    "Female-4-212": 3,
    "Female-4-213": 3,
    "Female-4-214": 3,
    "Female-4-215": 3,
    "Female-4-216": 3,
    "Female-4-217": 3,
    "Female-4-218": 3,
    "Female-4-219": 3,
    "Female-4-220": 3,
    "Female-4-221": 3,
    "Female-4-222": 3,
    "Female-4-223": 3,
    "Female-4-224": 3,
    "Female-4-225": 3,
    "Female-4-226": 3,
    "Female-4-227": 3,
    "Female-4-228": 3,
    "Female-5-70": -0.5,
    "Female-5-71": -0.5,
    "Female-5-72": -0.5,
    "Female-5-73": -0.5,
    "Female-5-74": -0.5,
    "Female-5-75": -0.5,
    "Female-5-76": -0.5,
    "Female-5-77": -0.5,
    "Female-5-78": -0.5,
    "Female-5-79": -0.5,
    "Female-5-80": -0.5,
    "Female-5-81": -0.5,
    "Female-5-82": -0.5,
    "Female-5-83": -0.5,
    "Female-5-84": -0.5,
    "Female-5-85": -0.5,
    "Female-5-86": -0.5,
    "Female-5-87": -0.5,
    "Female-5-88": -0.5,
    "Female-5-89": -0.5,
    "Female-5-90": -0.5,
    "Female-5-91": -0.5,
    "Female-5-92": -0.5,
    "Female-5-93": -0.5,
    "Female-5-94": -0.5,
    "Female-5-95": -0.5,
    "Female-5-96": -0.5,
    "Female-5-97": -0.5,
    "Female-5-98": -0.5,
    "Female-5-99": -0.5,
    "Female-5-100": -0.5,
    "Female-5-101": -0.5,
    "Female-5-102": -0.5,
    "Female-5-103": -0.5,
    "Female-5-104": -0.5,
    "Female-5-105": -0.5,
    "Female-5-106": -0.5,
    "Female-5-107": -0.5,
    "Female-5-108": -0.5,
    "Female-5-109": -0.5,
    "Female-5-110": -0.5,
    "Female-5-111": -0.5,
    "Female-5-112": -0.5,
    "Female-5-113": -0.5,
    "Female-5-114": -0.5,
    "Female-5-115": -0.5,
    "Female-5-116": -0.5,
    "Female-5-117": -0.5,
    "Female-5-118": -0.5,
    "Female-5-119": -0.5,
    "Female-5-120": 0,
    "Female-5-121": 0,
    "Female-5-122": 0,
    "Female-5-123": 0,
    "Female-5-124": 0,
    "Female-5-125": 0,
    "Female-5-126": 0,
    "Female-5-127": 0,
    "Female-5-128": 0,
    "Female-5-129": 0,
    "Female-5-130": 0.5,
    "Female-5-131": 0.5,
    "Female-5-132": 0.5,
    "Female-5-133": 0.5,
    "Female-5-134": 0.5,
    "Female-5-135": 0.5,
    "Female-5-136": 0.5,
    "Female-5-137": 0.5,
    "Female-5-138": 0.5,
    "Female-5-139": 0.5,
    "Female-5-140": 1,
    "Female-5-141": 1,
    "Female-5-142": 1,
    "Female-5-143": 1,
    "Female-5-144": 1,
    "Female-5-145": 1,
    "Female-5-146": 1,
    "Female-5-147": 1,
    "Female-5-148": 1,
    "Female-5-149": 1,
    "Female-5-150": 1.5,
    "Female-5-151": 1.5,
    "Female-5-152": 1.5,
    "Female-5-153": 1.5,
    "Female-5-154": 1.5,
    "Female-5-155": 1.5,
    "Female-5-156": 1.5,
    "Female-5-157": 1.5,
    "Female-5-158": 1.5,
    "Female-5-159": 1.5,
    "Female-5-160": 1.5,
    "Female-5-161": 1.5,
    "Female-5-162": 1.5,
    "Female-5-163": 1.5,
    "Female-5-164": 1.5,
    "Female-5-165": 1.5,
    "Female-5-166": 1.5,
    "Female-5-167": 1.5,
    "Female-5-168": 1.5,
    "Female-5-169": 1.5,
    "Female-5-170": 2,
    "Female-5-171": 2,
    "Female-5-172": 2,
    "Female-5-173": 2,
    "Female-5-174": 2,
    "Female-5-175": 2,
    "Female-5-176": 2,
    "Female-5-177": 2,
    "Female-5-178": 2,
    "Female-5-179": 2,
    "Female-5-180": 2.5,
    "Female-5-181": 2.5,
    "Female-5-182": 2.5,
    "Female-5-183": 2.5,
    "Female-5-184": 2.5,
    "Female-5-185": 2.5,
    "Female-5-186": 2.5,
    "Female-5-187": 2.5,
    "Female-5-188": 2.5,
    "Female-5-189": 2.5,
    "Female-5-190": 3,
    "Female-5-191": 3,
    "Female-5-192": 3,
    "Female-5-193": 3,
    "Female-5-194": 3,
    "Female-5-195": 3,
    "Female-5-196": 3,
    "Female-5-197": 3,
    "Female-5-198": 3,
    "Female-5-199": 3,
    "Female-5-200": 4,
    "Female-5-201": 4,
    "Female-5-202": 4,
    "Female-5-203": 4,
    "Female-5-204": 4,
    "Female-5-205": 4,
    "Female-5-206": 4,
    "Female-5-207": 4,
    "Female-5-208": 4,
    "Female-5-209": 4,
    "Female-5-210": 4,
    "Female-5-211": 4,
    "Female-5-212": 4,
    "Female-5-213": 4,
    "Female-5-214": 4,
    "Female-5-215": 4,
    "Female-5-216": 4,
    "Female-5-217": 4,
    "Female-5-218": 4,
    "Female-5-219": 4,
    "Female-5-220": 4,
    "Female-5-221": 4,
    "Female-5-222": 4,
    "Female-5-223": 4,
    "Female-5-224": 4,
    "Female-5-225": 4,
    "Female-5-226": 4,
    "Female-5-227": 4,
    "Female-5-228": 4,
    "Female-6-70": -0.5,
    "Female-6-71": -0.5,
    "Female-6-72": -0.5,
    "Female-6-73": -0.5,
    "Female-6-74": -0.5,
    "Female-6-75": -0.5,
    "Female-6-76": -0.5,
    "Female-6-77": -0.5,
    "Female-6-78": -0.5,
    "Female-6-79": -0.5,
    "Female-6-80": -0.5,
    "Female-6-81": -0.5,
    "Female-6-82": -0.5,
    "Female-6-83": -0.5,
    "Female-6-84": -0.5,
    "Female-6-85": -0.5,
    "Female-6-86": -0.5,
    "Female-6-87": -0.5,
    "Female-6-88": -0.5,
    "Female-6-89": -0.5,
    "Female-6-90": -0.5,
    "Female-6-91": -0.5,
    "Female-6-92": -0.5,
    "Female-6-93": -0.5,
    "Female-6-94": -0.5,
    "Female-6-95": -0.5,
    "Female-6-96": -0.5,
    "Female-6-97": -0.5,
    "Female-6-98": -0.5,
    "Female-6-99": -0.5,
    "Female-6-100": -0.5,
    "Female-6-101": -0.5,
    "Female-6-102": -0.5,
    "Female-6-103": -0.5,
    "Female-6-104": -0.5,
    "Female-6-105": -0.5,
    "Female-6-106": -0.5,
    "Female-6-107": -0.5,
    "Female-6-108": -0.5,
    "Female-6-109": -0.5,
    "Female-6-110": -0.5,
    "Female-6-111": 0,
    "Female-6-112": 0,
    "Female-6-113": 0,
    "Female-6-114": 0,
    "Female-6-115": 0,
    "Female-6-116": 0,
    "Female-6-117": 0,
    "Female-6-118": 0,
    "Female-6-119": 0,
    "Female-6-120": 0.5,
    "Female-6-121": 0.5,
    "Female-6-122": 0.5,
    "Female-6-123": 0.5,
    "Female-6-124": 0.5,
    "Female-6-125": 0.5,
    "Female-6-126": 0.5,
    "Female-6-127": 0.5,
    "Female-6-128": 0.5,
    "Female-6-129": 0.5,
    "Female-6-130": 0.5,
    "Female-6-131": 0.5,
    "Female-6-132": 0.5,
    "Female-6-133": 0.5,
    "Female-6-134": 0.5,
    "Female-6-135": 0.5,
    "Female-6-136": 0.5,
    "Female-6-137": 0.5,
    "Female-6-138": 0.5,
    "Female-6-139": 0.5,
    "Female-6-140": 1,
    "Female-6-141": 1,
    "Female-6-142": 1,
    "Female-6-143": 1,
    "Female-6-144": 1,
    "Female-6-145": 1,
    "Female-6-146": 1,
    "Female-6-147": 1,
    "Female-6-148": 1,
    "Female-6-149": 1,
    "Female-6-150": 1.5,
    "Female-6-151": 1.5,
    "Female-6-152": 1.5,
    "Female-6-153": 1.5,
    "Female-6-154": 1.5,
    "Female-6-155": 1.5,
    "Female-6-156": 1.5,
    "Female-6-157": 1.5,
    "Female-6-158": 1.5,
    "Female-6-159": 1.5,
    "Female-6-160": 1.5,
    "Female-6-161": 1.5,
    "Female-6-162": 1.5,
    "Female-6-163": 1.5,
    "Female-6-164": 1.5,
    "Female-6-165": 2,
    "Female-6-166": 2,
    "Female-6-167": 2,
    "Female-6-168": 2,
    "Female-6-169": 2,
    "Female-6-170": 2,
    "Female-6-171": 2,
    "Female-6-172": 2,
    "Female-6-173": 2,
    "Female-6-174": 2,
    "Female-6-175": 2.5,
    "Female-6-176": 2.5,
    "Female-6-177": 2.5,
    "Female-6-178": 2.5,
    "Female-6-179": 2.5,
    "Female-6-180": 3,
    "Female-6-181": 3,
    "Female-6-182": 3,
    "Female-6-183": 3,
    "Female-6-184": 3,
    "Female-6-185": 3,
    "Female-6-186": 3,
    "Female-6-187": 3,
    "Female-6-188": 3,
    "Female-6-189": 3,
    "Female-6-190": 3,
    "Female-6-191": 3,
    "Female-6-192": 3,
    "Female-6-193": 3,
    "Female-6-194": 3,
    "Female-6-195": 3,
    "Female-6-196": 3,
    "Female-6-197": 3,
    "Female-6-198": 3,
    "Female-6-199": 3,
    "Female-6-200": 4,
    "Female-6-201": 4,
    "Female-6-202": 4,
    "Female-6-203": 4,
    "Female-6-204": 4,
    "Female-6-205": 4,
    "Female-6-206": 4,
    "Female-6-207": 4,
    "Female-6-208": 4,
    "Female-6-209": 4,
    "Female-6-210": 4,
    "Female-6-211": 4,
    "Female-6-212": 4,
    "Female-6-213": 4,
    "Female-6-214": 4,
    "Female-6-215": 4,
    "Female-6-216": 4,
    "Female-6-217": 4,
    "Female-6-218": 4,
    "Female-6-219": 4,
    "Female-6-220": 4,
    "Female-6-221": 4,
    "Female-6-222": 4,
    "Female-6-223": 4,
    "Female-6-224": 4,
    "Female-6-225": 4,
    "Female-6-226": 4,
    "Female-6-227": 4,
    "Female-6-228": 4

};

export default sbpLookUp;